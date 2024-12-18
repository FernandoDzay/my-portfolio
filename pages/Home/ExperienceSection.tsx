"use client"

import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/utils/styles"
import Section from "@/components/Section"
import { textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { VerticalTimeline } from "react-vertical-timeline-component"
import ExperienceCard from "./ExperienceCard"
import starbucks from './starbucks.png'



type Props = {}


const Experience:React.FC<Props> = () => {
    const experiences = [
        {
          title: "React.js Developer",
          company_name: "Starbucks",
          icon: starbucks,
          iconBg: "#383E56",
          date: "March 2020 - April 2021",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
        {
          title: "React Native Developer",
          company_name: "Tesla",
          icon: starbucks,
          iconBg: "#E6DEDD",
          date: "Jan 2021 - Feb 2022",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
        {
          title: "Web Developer",
          company_name: "Shopify",
          icon: starbucks,
          iconBg: "#383E56",
          date: "Jan 2022 - Jan 2023",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
        {
          title: "Full stack Developer",
          company_name: "Meta",
          icon: starbucks,
          iconBg: "#E6DEDD",
          date: "Jan 2023 - Present",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
    ];
    
    
    return (
        <Section id="experience">
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>WOrk Experience.</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </Section>
    )
}

export default Experience