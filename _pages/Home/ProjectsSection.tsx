"use client"

import { fadeIn, textVariant } from "@/utils/motion"
import Section from "@/components/Section"
import { motion } from "framer-motion"
import { styles } from "@/utils/styles"
import ProjectCard from "@/components/Project"
import { getProjectsByFilters } from "../Projects/projectsJson"
import Link from "next/link"


type Props = LangProps


const ProjectsSection:React.FC<Props> = ({ lang }) => {
    const isEn = lang === 'en';
    
    
    return (
        <Section id="projects-section">
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>{isEn ? `My work` : `Mi trabajo`}</p>
                <h2 className={styles.sectionHeadText}>{isEn ? `Recent Projects` : `Proyectos recientes`}</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    {isEn ? (<>
                        Here are three of my most recent projects, showcasing my expertise in web development and commitment to delivering high-quality solutions. If you want to see all the projects I have developed or contributed to, <Link className="underline hover:text-blue-600" href="/projects" title='All my projects'>Click here</Link>.
                    </>) : (<>
                        A continuación, presento tres de mis proyectos más recientes, destacando mi experiencia en desarrollo web y mi compromiso con la entrega de soluciones de alta calidad. Si deseas ver todos los proyectos que he creado o en los que he participado, <Link className="underline hover:text-blue-600" href="/es/proyectos" title='Todos mis proyectos'>da click Aquí</Link>.
                    </>)}
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap xg:grid xg:grid-cols-3 grid-cols-3 gap-7">
                {getProjectsByFilters(['show-in-home-page']).map((project, index) => (
                    <ProjectCard key={index} index={index} {...project} />
                ))}
            </div>
        </Section>
    )
}

export default ProjectsSection