"use client"

import { fadeIn, textVariant } from "@/utils/motion"
import Section from "../section"
import { motion } from "framer-motion"
import { styles } from "@/app/styles"
import { projects } from "@/constants"
import ProjectCard from "../projectCard"



type Props = {}

const ProjectsSection:React.FC<Props> = () => {
    
    
    return (
        <Section id="projects-section">
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a officia voluptatibus minima sint, placeat ratione sapiente laudantium nostrum officiis, debitis aut nesciunt repudiandae dolore voluptas ducimus sequi ut soluta?
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </Section>
    )
}

export default ProjectsSection