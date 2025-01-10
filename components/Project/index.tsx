"use client"

import { fadeIn } from "@/utils/motion"
import github from './github.png'
import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { Tilt } from "react-tilt"
import Button from "@/components/Button"
import { Project } from "@/_pages/Projects/projectsJson"
import Link from "next/link"


type Props = Project & {index?: number}

const ProjectCard:React.FC<Props> = (props) => {

    
    return (
        <motion.div variants={fadeIn("up", "spring", (props.index || 0) * 0.5, 0.75)}>
            <div /* options={{ max: 45, scale: 1, speed: 100 }} */ className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <Image src={props.image} alt={props.es.name} className="w-full h-full object-cover rounded-2xl" />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div onClick={() => window.open(`/projects/${props.slug}`, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <Image src={github} alt="Github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{props.es.name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{props.es.briefDescription}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {props.technologies?.map((technology, key) => (
                        <p key={key} className={`text-[14px]`} style={{color: technology.hashtagColor}}>
                            #{technology.hashtag}
                        </p>
                    ))}
                </div>
                
                <Link href={`/projects/${props.slug}`}>
                    <Button color="blue" className="mt-3">More details</Button>
                </Link>
            </div>
        </motion.div>
    )
}

export default ProjectCard