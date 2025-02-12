"use client"

import { slideIn } from "@/utils/motion"
import Section from "@/components/Section"
import { motion } from "framer-motion"
import { styles } from "@/utils/styles"
import { useRef, useState } from "react"
import contactAction from "./contactAction"
import dynamic from 'next/dynamic'
import { EarthCanvas, StarsCanvas } from "@/components/Canvas"
import Button from "@/components/Button"
import useLang from "@/hooks/useLang"
const SweetAlert2 = dynamic(() => import('@/components/SweetAlert'))
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'))



type Props = {}

const ContactSection:React.FC<Props> = () => {
    const isEn = useLang();
    const form_key = 'massage_sent';
    const [sweetAlertProps, setSweetAlertProps] = useState<{show: boolean, title?: string, text?: string, icon?: 'success'| 'error'}>({show: false});
    const [downloadSweetAlert, setDownloadSweetAlert] = useState(false);
    const [downloadReCaptcha, setDownloadReCaptcha] = useState(false);
    const [loading, setLoading] = useState(false);
    const reCaptchaRef = useRef<any>();
    const [form, setForm] = useState({
        Nombre: '',
        Email: '',
        Mensaje: '',
    });


    const setDownloadModulesTrue = () => {
        setDownloadSweetAlert(true);
        setDownloadReCaptcha(true);
    }

    const handleChange = (e: any) => {
        setDownloadModulesTrue();
        setDownloadSweetAlert
        const { target } = e;
        const { name, value } = target;
    
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setDownloadModulesTrue();
        e.preventDefault();

        if( localStorage.getItem(form_key) !== null ) {
            setSweetAlertProps({
                show: true,
                icon: 'success',
                title: isEn ? `Don’t worry` : `No te preocupes`,
                text: isEn ? `Your message has been sent. I will get in touch with you shortly.` : `Tu mensaje ya ha sido enviado, en breve me pondré en contacto contigo`
            });
            setForm({
                Nombre: '',
                Email: '',
                Mensaje: '',
            });
            return;
        }

        setLoading(true);
        let reCaptchaToken: string|null = null;

        if( process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA === 'true' ) {
            try {
                if (!reCaptchaRef.current) throw new Error("No se configuró correctamente el reCaptcha");
                reCaptchaToken = await reCaptchaRef.current.executeAsync();
                reCaptchaRef.current.reset();
            } catch(e: unknown) {
                return setSweetAlertProps({show: true, icon: 'error', title: 'Ups', text: 'Ocurrió un error inesperado, en breve lo corrigiré para que no vuelva a suceder.'});
            }
        }

        try {
            const res = await contactAction({...form, reCaptchaToken});

            if(!res.success) return setSweetAlertProps({show: true, icon: 'error', title: 'Ups', text: 'Ocurrió un error inesperado, en breve lo corrigiré para que no vuelva a suceder.'});
            localStorage.setItem(form_key, 'true');
        } catch(e: unknown) {
            return setSweetAlertProps({show: true, icon: 'error', title: 'Ups', text: 'Ocurrió un error inesperado, en breve lo corrigiré para que no vuelva a suceder.'});
        }

        setSweetAlertProps({show: true, icon: 'success', title: 'Mensaje enviado', text: 'En breve me pondré en contacto contigo'});
        setForm({
            Nombre: '',
            Email: '',
            Mensaje: '',
        });
        setLoading(false);
    }
    
    
    return (
        <Section id="contact">
            <div className='relative z-0'>
                <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
                    <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                        <p className={styles.sectionSubText}>{isEn ? `Get in touch` : `Ponte en contacto`}</p>
                        <h3 className={styles.sectionHeadText}>{isEn ? `Contact` : `Contacto`}</h3>

                        <form className='mt-12 flex flex-col gap-8' method="post" onSubmit={handleSubmit}>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>{isEn ? `Your name` : `Tu nombre`}</span>
                                <input
                                    type='text'
                                    name='Nombre'
                                    minLength={4}
                                    required
                                    value={form.Nombre}
                                    onChange={handleChange}
                                    placeholder={isEn ? `What's your name?` : `¿Cuál es tu nombre?`}
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>{isEn ? `Your email` : `Tu email`}</span>
                                <input
                                    type='email'
                                    name='Email'
                                    required
                                    value={form.Email}
                                    onChange={handleChange}
                                    placeholder={isEn ? `What's your email?` : `¿Cuál es tu email?`}
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>{isEn ? `Your Message` : `Tu mensaje`}</span>
                                <textarea
                                    rows={5}
                                    name='Mensaje'
                                    required
                                    minLength={4}
                                    value={form.Mensaje}
                                    onChange={handleChange}
                                    placeholder={isEn ? `What you want to say?` : `¿Qué es lo que te gustaría decir?`}
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <Button loading={loading} type="submit">{isEn ? `Send` : `Enviar`}</Button>
                        </form>
                    </motion.div>

                    <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
                        {process.env.NEXT_PUBLIC_SHOW_CANVAS === 'true' && (
                            <EarthCanvas />
                        )}
                    </motion.div>
                </div>
            </div>
            {process.env.NEXT_PUBLIC_SHOW_CANVAS === 'true' && (
                <StarsCanvas />
            )}

            {downloadSweetAlert && (
                <SweetAlert2 {...sweetAlertProps} confirmButtonColor='#22344b' onConfirm={() => setSweetAlertProps({...sweetAlertProps, show: false})} />
            )}
            {process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA === 'true' && downloadReCaptcha && (
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    size="invisible"
                    // @ts-ignore
                    ref={reCaptchaRef} 
                />
            )}
        </Section>
    )
}

export default ContactSection