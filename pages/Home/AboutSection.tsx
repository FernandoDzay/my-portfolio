"use client"

import Section from "@/components/Section"
import { textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { styles } from "@/utils/styles"
import Image from "next/image"
import myself from "./myProfile.jpg"


type Props = {}

const AboutSection:React.FC<Props> = () => {
    const pStyle = 'text-white-100 text-[16px] tracking-wider mb-5';

    
    return (
        <Section id="about">
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>Who I Am</p>
                <h2 className={styles.sectionHeadText}>About me</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-10">
                <div className="self-center">
                    <p className={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus earum nobis? Dolorem asperiores commodi ducimus tenetur architecto, praesentium ipsa neque eum, nesciunt sapiente esse ad veritatis repellat vitae odio!</p>
                    <p className={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus earum nobis? Dolorem asperiores commodi ducimus tenetur architecto, praesentium ipsa neque eum, nesciunt sapiente esse ad veritatis repellat vitae odio!</p>
                    <p className={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus earum nobis? Dolorem asperiores commodi ducimus tenetur architecto, praesentium ipsa neque eum, nesciunt sapiente esse ad veritatis repellat vitae odio!</p>
                </div>
                <div className="justify-self-center">
                    <Image
                        src={myself}
                        alt="Luis Fernando Dzay Villanueva"
                        className="max-w-96 w-full object-cover h-auto"
                    />
                </div>
            </div>
        </Section>
    )
}

export default AboutSection