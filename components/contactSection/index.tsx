"use client"

import { slideIn } from "@/utils/motion"
import Section from "../section"
import { motion } from "framer-motion"
import { styles } from "@/app/styles"
import { useRef, useState } from "react"
import EarthCanvas from "../earthCanvas"
import StarsCanvas from "../starsCanvas"
import contactAction from "./contactAction"
import dynamic from 'next/dynamic'
const SweetAlert2 = dynamic(() => import('@/components/sweetAlert'))
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'))



type Props = {}

const ContactSection:React.FC<Props> = () => {
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
            setSweetAlertProps({show: true, icon: 'success', title: 'No te preocupes', text: 'Tu mensaje ya ha sido enviado, en breve me pondré en contacto contigo'});
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
                        <p className={styles.sectionSubText}>Get in touch</p>
                        <h3 className={styles.sectionHeadText}>Contact.</h3>

                        <form className='mt-12 flex flex-col gap-8' method="post" onSubmit={handleSubmit}>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Name</span>
                                <input
                                    type='text'
                                    name='Nombre'
                                    minLength={4}
                                    required
                                    value={form.Nombre}
                                    onChange={handleChange}
                                    placeholder="What's your good name?"
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your email</span>
                                <input
                                    type='email'
                                    name='Email'
                                    required
                                    value={form.Email}
                                    onChange={handleChange}
                                    placeholder="What's your web address?"
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Message</span>
                                <textarea
                                    rows={5}
                                    name='Mensaje'
                                    required
                                    minLength={4}
                                    value={form.Mensaje}
                                    onChange={handleChange}
                                    placeholder='What you want to say?'
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <button disabled={loading} type='submit' className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
                        <EarthCanvas />
                    </motion.div>
                </div>
            </div>
            <StarsCanvas />

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