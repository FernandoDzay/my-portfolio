"use client"

import { fadeIn } from "@/utils/motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tilt } from "react-tilt"
import Button from "@/components/Button"
import { Project } from "@/_pages/Projects/projectsJson"
import Link from "next/link"
import useLang from "@/hooks/useLang"


type Props = Project & {index?: number}

const ProjectCard:React.FC<Props> = (props) => {
    const isEn = useLang();
    const lang = isEn ? `en` : `es`;

    
    return (
        <motion.div className="h-full" variants={fadeIn("up", "spring", (props.index || 0) * 0.5, 0.75)}>
            <Tilt options={{ max: 15, scale: 1, speed: 10 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col">
                <div className="relative w-full h-[230px]">
                    <Image src={props.image} alt={props[lang].name} className="w-full h-full object-cover rounded-2xl" />
                </div>

                <div className="mt-5 mb-auto">
                    <h3 className="text-white font-bold text-[24px]">{props[lang].name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{props[lang].briefDescription}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {props.technologies?.map((technology, key) => (
                        <p key={key} className={`text-[14px]`} style={{color: technology.hashtagColor}}>
                            #{technology.hashtag}
                        </p>
                    ))}
                </div>
                
                <Link href={isEn ? `/projects/${props.slug}` : `/es/proyectos/${props.slug}`} title={isEn ? `More details` : `Más detalles`}>
                    <Button color="blue" className="mt-3">{isEn ? `More details` : `Más detalles`}</Button>
                </Link>
            </Tilt>
        </motion.div>
    )
}

export default ProjectCard