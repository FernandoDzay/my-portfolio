"use client"

import { styles } from "@/app/styles"
import Section from "@/components/section"
import { experiences } from "@/constants"
import { textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { VerticalTimeline } from "react-vertical-timeline-component"
import ExperienceCard from "./ExperienceCard"
import "react-vertical-timeline-component/style.min.css";



type Props = {}

const Experience:React.FC<Props> = () => {
    
    
    return (
        <Section id="experience">
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>WOrk Experience.</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </Section>
    )
}

export default Experience