"use client"

import { styles } from '@/utils/styles'
import VerticalSwitch from '@/components/VerticalSwitch'
import { ComputerCanvas } from '@/components/Canvas'
import Section from '@/components/Section'
import { fadeIn, textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'



type Props = LangProps

const Projects:React.FC<Props> = () => {
    
    
    return (
        <>
            <section className='relative w-full h-screen mx-auto'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center absolute left-0 right-0 w-full h-screen -z-10'></div>
                <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>
                    <div className='w-full'>
                        <h1 className={`${styles.heroHeadText}`}>Mis <span className='text-[#915eff]'>Proyectos</span></h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>Conoce todos los proyectos <br className='sm:block hidden' />qué he creado, o en los que he<br className='sm:block hidden' />participado</p>
                    </div>
                </div>
                {process.env.NEXT_PUBLIC_SHOW_CANVAS === 'true' && (
                    <ComputerCanvas />
                )}
                <VerticalSwitch href='#about' />
            </section>

            <Section id="asda">
                <motion.div variants={textVariant(0)}>  
                    <p className={styles.sectionSubText}>List of my</p>
                    <h2 className={styles.sectionHeadText}>Mechatronic projects</h2>
                </motion.div>

                <div className="w-full flex">
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a officia voluptatibus minima sint, placeat ratione sapiente laudantium nostrum officiis, debitis aut nesciunt repudiandae dolore voluptas ducimus sequi ut soluta?
                    </motion.p>
                </div>
            </Section>
        </>
    )
}

export default Projects