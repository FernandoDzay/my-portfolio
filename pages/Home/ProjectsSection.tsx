"use client"

import { fadeIn, textVariant } from "@/utils/motion"
import Section from "@/components/Section"
import { motion } from "framer-motion"
import { styles } from "@/utils/styles"
import carrent from './carrent.png'
import { SimpleProjectCard } from "@/components/Project"


type Props = {}


const ProjectsSection:React.FC<Props> = () => {
    const projects = [
        {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
            name: "react",
            color: "blue-text-gradient",
            },
            {
            name: "mongodb",
            color: "green-text-gradient",
            },
            {
            name: "tailwind",
            color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
        },
        {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
            name: "react",
            color: "blue-text-gradient",
            },
            {
            name: "restapi",
            color: "green-text-gradient",
            },
            {
            name: "scss",
            color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
        },
        {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
            name: "nextjs",
            color: "blue-text-gradient",
            },
            {
            name: "supabase",
            color: "green-text-gradient",
            },
            {
            name: "css",
            color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
        },
    ];
    
    
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
                    <SimpleProjectCard key={index} index={index} {...project} />
                ))}
            </div>
        </Section>
    )
}

export default ProjectsSection