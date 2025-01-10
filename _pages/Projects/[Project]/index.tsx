"use client"

import { textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { styles } from "@/utils/styles"
import airportcancun from '@/_pages/Home/airportcancun.png'
import Image from "next/image"
import Button from "@/components/Button"
import externalLinkIcon from './external_link_icon.svg'
import githubIcon from './github_icon.svg'


type Props = LangProps

const Project:React.FC<Props> = () => {
    const pStyle = 'text-white-100 text-[16px] tracking-wider mb-5';
    
    
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center absolute left-0 right-0 w-full h-screen -z-10'></div>

            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <motion.div variants={textVariant(0)} className="mt-10">
                    <p className={styles.sectionSubText}>Project</p>
                    <h2 className={styles.sectionHeadText}>Caribbean Transfers</h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-10">
                    <div>
                        <p className={pStyle}>Página web que brinda distintos servicios del Aeropuerto de Cancún. Servicios como por ejemplo: Transportación, renta de autos, tours y hoteles. Además, también cuenta con: Información acerca de Cancún, Playa del Carmen, Tulum, Puerto Aventuras, Playa Mujeres y Akumal; blog, monitoreo de vuelo, objetos perdidos, duty free, entre otros. Mi función fue maquetar absolutamente todo el sitio, teniendo en cuenta la experiencia de usuario, y conectar servicios desde el Frontend para el área de transportación.</p>

                        <div className="flex gap-5">
                            <a href="#">
                                <Button color="blue">See Live <Image src={externalLinkIcon} alt="External link" className="w-4 h-auto" /></Button>
                            </a>
                            <a href="#">
                                <Button color="grey">Source code <Image src={githubIcon} alt="External link" className="w-4 h-auto" /></Button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Image src={airportcancun} alt="asdsa" className="w-full h-auto " />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project