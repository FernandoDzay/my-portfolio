"use client"

import { fadeIn } from "@/utils/motion"
import github from './github.png'
import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { Tilt } from "react-tilt"


type Props = {
    index: number
    name: string
    description: string
    tags: {
        name: string
        color: string
    }[]
    image: StaticImageData
    source_code_link: string
}

const SimpleProjectCard:React.FC<Props> = ({ index, name, description, tags, image, source_code_link }) => {
    
    
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <Image src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <Image src={github} alt="Github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags?.map((tag, key) => (
                        <p key={key} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

export default SimpleProjectCard