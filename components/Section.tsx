"use client"

import { motion } from 'framer-motion'
import { styles } from '@/utils/styles'
import { staggerContainer } from '@/utils/motion'


type Props = {
    children: React.ReactNode
    id: string
    withoutEffect?: boolean
}

const Section:React.FC<Props> = (props) => {
    
    
    return (
        <motion.section
            variants={staggerContainer(0, 0)}
            initial={props.withoutEffect ? undefined : "hidden"}
            whileInView={props.withoutEffect ? undefined : "show"}
            viewport={props.withoutEffect ? undefined : {once: true, amount: 0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={props.id}>&nbsp;</span>
            {props.children}
        </motion.section>
    )
}

export default Section