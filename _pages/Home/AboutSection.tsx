"use client"

import Section from "@/components/Section"
import { textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { styles } from "@/utils/styles"
import Image from "next/image"
import myself from "./myProfile.jpg"
import Link from "next/link"


type Props = LangProps

const AboutSection:React.FC<Props> = ({ lang }) => {
    const isEn = lang === 'en'
    const pStyle = 'text-white-100 text-[16px] tracking-wider mb-5';

    
    return (
        <Section id="about">
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>{isEn ? `Who I Am` : `Quién soy`}</p>
                <h2 className={styles.sectionHeadText}>{isEn ? `About me` : `Acerca de mí`}</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-10">
                <div className="self-center">
                    {isEn ? (<>
                        <p className={pStyle}>Hi, I’m Luis Dzay, a passionate Software Engineer specializing in building dynamic and responsive web applications. My greatest strength lies in React.js, but I’m also skilled in backend development and creating web solutions with good SEO-focused programming practices.</p>
                        <p className={pStyle}>Currently, I work at <Link className="underline hover:text-blue-600" href="/projects/abaccor-app" title="Abaccor">Abaccor</Link>, where I continue to refine my skills and bring ideas to life.</p>
                        <p className={pStyle}>I have hands-on experience with technologies like <span className="text-[#2f80ed]">React</span>, <span className="text-[#764abc]">Redux</span>, <span className="text-[#3178c6]">Typescript</span>, <span className="text-[#e0234e]">Nest.js</span>, <span className="text-[#9e8a8a]">Express.js</span>, <span className="text-[#2f80ed]">Next.js</span>, <span className="text-[#ff2d20]">Laravel</span> y <span className="text-[#00758f]">SQL</span>; and I am comfortable adapting to and working with any other technology as needed.</p>
                        <p className={pStyle}>Throughout my career, I’ve contributed to numerous <Link className="underline hover:text-blue-600" href='/projects#transportation' title="projects in the transportation industry in Cancún">projects in the transportation industry in Cancún</Link>, delivering innovative solutions to client needs.</p>
                        <p className={pStyle}>Feel free to explore <Link className="underline hover:text-blue-600" href="/projects" title="my projects">my projects</Link>, where I showcase my work and the technologies I use to create impactful web experiences.</p>
                    </>) : (<>
                        <p className={pStyle}>Hola, soy Luis Dzay, un apasionado Ingeniero de Software especializado en la creación de aplicaciones web. Mi mayor fortaleza radica en React.js, pero también tengo experiencia en desarrollo backend y en la creación de soluciones web con buenas prácticas de programación enfocadas en SEO.</p>
                        <p className={pStyle}>Actualmente trabajo en <Link className="underline hover:text-blue-600" href="/es/proyectos/abaccor-app" title="Abaccor">Abaccor</Link>, donde sigo perfeccionando mis habilidades y transformando ideas en proyectos innovadores.</p>
                        <p className={pStyle}>Tengo experiencia práctica con tecnologías como <span className="text-[#2f80ed]">React</span>, <span className="text-[#764abc]">Redux</span>, <span className="text-[#3178c6]">Typescript</span>, <span className="text-[#e0234e]">Nest.js</span>, <span className="text-[#9e8a8a]">Express.js</span>, <span className="text-[#2f80ed]">Next.js</span>, <span className="text-[#ff2d20]">Laravel</span> y <span className="text-[#00758f]">SQL</span>. Sin embargo no tengo problema al adaptarme a cualquier otra tecnología según sea necesario.</p>
                        <p className={pStyle}>A lo largo de mi carrera, he contribuido a numerosos <Link className="underline hover:text-blue-600" href="/es/proyectos#transportation" title="proyectos en la industria de transportación en Cancún">proyectos en la industria de transportación en Cancún</Link>, entregando soluciones innovadoras que satisfacen las necesidades de los clientes.</p>
                        <p className={pStyle}>Te invito a explorar <Link className="underline hover:text-blue-600" href='/es/proyectos' title="mis proyectos">mis proyectos</Link>, donde muestro mi trabajo y las tecnologías que utilizo para crear proyectos.</p>
                    </>)}
                </div>
                <div className="justify-self-center">
                    <Image
                        src={myself}
                        alt="Luis Fernando Dzay Villanueva"
                        title="Luis Fernando Dzay Villanueva"
                        className="max-w-96 w-full object-cover h-auto"
                    />
                </div>
            </div>
        </Section>
    )
}

export default AboutSection