"use client"

import { styles } from '@/utils/styles'
import VerticalSwitch from '@/components/VerticalSwitch'
import { ComputerCanvas } from '@/components/Canvas'
import Section from '@/components/Section'
import { fadeIn, textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { getProjectsByFilters } from './projectsJson'
import ProjectCard from '@/components/Project'



type Props = LangProps

const Projects:React.FC<Props> = ({ lang }) => {
    const isEn = lang === 'en';


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
                        {isEn ? (<>
                            <h1 className={`${styles.heroHeadText}`}>My <span className='text-[#915eff]'>Projects</span></h1>
                            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Explore all the projects<br className='sm:block hidden' /> I have created or contributed to.</p>
                        </>) : (<>
                            <h1 className={`${styles.heroHeadText}`}>Mis <span className='text-[#915eff]'>Proyectos</span></h1>
                            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Conoce todos los proyectos <br className='sm:block hidden' />qué he creado, o en los que he<br className='sm:block hidden' />participado</p>
                        </>)}
                    </div>
                </div>
                {process.env.NEXT_PUBLIC_SHOW_CANVAS === 'true' && (
                    <ComputerCanvas />
                )}
                <VerticalSwitch href='#main' />
            </section>

            <Section id="main" withoutEffect>
                <motion.div variants={textVariant(0)}>
                    <p className={styles.sectionSubText}>{isEn ? `List of my` : `Lista de mis`}</p>
                    <h2 className={styles.sectionHeadText}>{isEn ? `Recent Projects` : `Proyectos recientes`}</h2>
                </motion.div>

                <div className="w-full flex">
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        {isEn ? `In this section, I showcase some of my most recent projects, where I’ve applied my skills as a full-stack developer to create dynamic and efficient web solutions.` : `En esta sección, te presento algunos de mis proyectos más recientes, en los que he aplicado mis habilidades como desarrollador full stack para crear soluciones web dinámicas y eficientes.`}
                    </motion.p>
                </div>

                <div className="mt-20 flex flex-wrap xg:grid xg:grid-cols-3 grid-cols-3 gap-7">
                    {getProjectsByFilters(['importants']).map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}
                </div>
            </Section>

            <Section id="transportation" withoutEffect>
                <motion.div variants={textVariant(0)}>
                    <p className={styles.sectionSubText}>{isEn ? `List of my` : `Lista de mis`}</p>
                    <h2 className={styles.sectionHeadText}>{isEn ? `Transportation projects` : `Proyectos de transportación`}</h2>
                </motion.div>

                <div className="w-full flex">
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        {isEn ? `Throughout my career, I have contributed to numerous projects in the transportation industry in Cancún. In this section, I showcase the ones I’ve worked on.` : `A lo largo de mi carrera, he contribuido a numerosos proyectos en la industria de transportación en Cancún. En esta sección te muestro cuáles fueron.`}
                    </motion.p>
                </div>

                <div className="mt-20 flex flex-wrap xg:grid xg:grid-cols-3 grid-cols-3 gap-7">
                    {getProjectsByFilters(['transportation']).map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}
                </div>
            </Section>

            <Section id="others-section" withoutEffect>
                <motion.div variants={textVariant(0)}>
                    <h2 className={styles.sectionHeadText}>{isEn ? `Other projects` : `Otros proyectos`}</h2>
                </motion.div>

                <div className="mt-20 flex flex-wrap xg:grid xg:grid-cols-3 grid-cols-3 gap-7">
                    {getProjectsByFilters(['others-section']).map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}
                </div>
            </Section>

            <Section id="university" withoutEffect>
                <motion.div variants={textVariant(0)}>
                    <p className={styles.sectionSubText}>{isEn ? `List of my` : `Lista de mis`}</p>
                    <h2 className={styles.sectionHeadText}>{isEn ? `University projects` : `Proyectos universitarios`}</h2>
                </motion.div>

                <div className="w-full flex">
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        {isEn ? `Although I currently work in programming, I hold a degree in Mechatronics Engineering. During my university years, I worked on some interesting projects. Feel free to explore them below.` : `Aunque ahora me dedico a la programación, yo soy Ingeniero en mecatrónica por título. Durante mi época universitaria, hice algunos proyectos interesantes. Si gustas conocerlos, aquí te muestro cuáles son`}
                    </motion.p>
                </div>

                <div className="mt-20 flex flex-wrap xg:grid xg:grid-cols-3 grid-cols-3 gap-7">
                    {getProjectsByFilters(['university']).map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}
                </div>
            </Section>
        </>
    )
}

export default Projects