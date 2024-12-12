"use server"

import { Client } from "@notionhq/client"


const contactAction = async (args: {Nombre: string, Email: string, Mensaje: string, reCaptchaToken: string|null}): Promise<{success: boolean, message: string}> => {
    if( process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA === 'true' ) {
        if( args.reCaptchaToken === null ) {
            console.warn('Alguien intentó mandar un mensaje sin haber mandado correctamente el recaptcha');
            return {success: false, message: 'Lo sentimos, no tienes autorización para mandar este mensaje'};
        }

        try {
            const isReCaptchaValid = await validateCaptcha(args.reCaptchaToken);
            if( !isReCaptchaValid ) throw new Error("ReCaptcha inválido");
        } catch(e: unknown) {
            console.error('Alguien intentó mandar un mensaje, pero el reCaptcha no es válido');
            return {success: false, message: 'Lo sentimos, no tienes autorización para mandar este mensaje'};
        }
    }

    const auth = process.env.NOTION_TOKEN;
    const database_id = process.env.NOTION_CONTACT_DATABASE_ID;
    if( !auth || !database_id ) {
        console.error('No están bien configuradas las variables de entorno NOTION_TOKEN, NOTION_CONTACT_DATABASE_ID');
        return {success: false, message: 'Lo sentimos, ocurrió un error inseperado'};
    }

    const notion = new Client({ auth });

    try {
        notion.pages.create({
            parent: { database_id },
            properties: {
                Nombre: {
                    type: 'title',
                    title: [
                        {
                            type: 'text',
                            text: {
                                content: args.Nombre
                            }
                        }
                    ]
                },
                Email: {
                    type: 'email',
                    email: args.Email
                },
                Mensaje: {
                    type: 'rich_text',
                    rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: args.Mensaje
                            }
                        }
                    ]
                }
            }
        });
    } catch(error: unknown) {
        return {success: false, message: 'Lo sentimos, ocurrió un error inseperado'}; 
    }

    return {message: 'Gracias por comuninicarte conmigo!', success: true};
}

const validateCaptcha = async (reCaptchaToken: string): Promise<boolean> => {
    const secret = process.env.RECAPTCHA_SECRET_KEY || '';
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${reCaptchaToken}`, {
        method: 'POST',
    });
    const data = await response.json();
    return data.success;
}

export default contactAction;