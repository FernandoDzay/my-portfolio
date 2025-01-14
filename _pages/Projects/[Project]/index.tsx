"use client"

import { textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { styles } from "@/utils/styles"
import Image from "next/image"
import Button from "@/components/Button"
import externalLinkIcon from './external_link_icon.svg'
import githubIcon from './github_icon.svg'
import { type Project } from "../projectsJson"
import { Tilt } from "react-tilt"


type Props = LangProps & {project: Project}

const Project:React.FC<Props> = ({ lang, project }) => {
    const isEn = lang === 'en';
    const pStyle = 'text-white-100 text-[16px] tracking-wider mb-5';
    
    
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center absolute left-0 right-0 w-full h-screen -z-10'></div>

            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <motion.div variants={textVariant(0)} className="mt-10">
                    <p className={styles.sectionSubText}>{isEn ? `Project` : `Proyecto`}</p>
                    <h2 className={styles.sectionHeadText}>{project[lang].name}</h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-10">
                    <div>
                        {project[lang].fullDescription.map((parragraph, key) => (
                            <p key={key} className={pStyle}>{ parragraph }</p>
                        ))}

                        <div className="mb-5 flex flex-wrap gap-2">
                            {project.technologies?.map((technology, key) => (
                                <p key={key} className={`text-[14px]`} style={{color: technology.hashtagColor}}>
                                    #{technology.hashtag}
                                </p>
                            ))}
                        </div>

                        <div className="flex gap-5">
                            <a href={project.seeLiveLink} target="_blank" rel="noopener noreferrer nofollow" className={`relative${project.seeLiveLink === undefined ? ' show-tooltip' : ''}`} title={isEn ? `See Live` : `Abrir página`}>
                                <div className="tooltip-container">
                                    <div className={`tooltip ${isEn ? `w-[180px]` : `w-[220px]`}`}>
                                        {isEn ? `This project is private` : `Este proyecto es privado`}
                                    </div>
                                </div>

                                <Button color="blue" className={project.seeLiveLink === undefined ? 'cursor-not-allowed' : undefined}>{isEn ? `See Live` : `Abrir página`} <Image src={externalLinkIcon} alt="External link" className="w-4 h-auto" /></Button>
                            </a>
                            <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer nofollow" className={`relative${project.sourceCodeLink === undefined ? ' show-tooltip' : ''}`} title={isEn ? `Source code` : `Código fuente`}>
                                <div className="tooltip-container">
                                    <div className={`tooltip ${isEn ? `w-[180px]` : `w-[220px]`}`}>
                                        {isEn ? `This project is private` : `Este proyecto es privado`}
                                    </div>
                                </div>

                                <Button color="grey" className={project.sourceCodeLink === undefined ? 'cursor-not-allowed' : undefined}>{isEn ? `Source code` : `Código fuente`} <Image src={githubIcon} alt={isEn ? "External link" : `Link externo`} className="w-4 h-auto" /></Button>
                            </a>
                        </div>
                    </div>
                    <Tilt options={{ max: 15, scale: 1, speed: 10 }}>
                        <Image src={project.image} alt={project[lang].name} className="w-full h-auto " />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default Project