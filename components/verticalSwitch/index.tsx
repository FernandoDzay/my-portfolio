"use client"
import { motion } from 'framer-motion'


type Props = {
    href: string
}

const VerticalSwitch:React.FC<Props> = (props) => {
    
    
    return (
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <a href={props.href}>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                        animate={{y: [0, 24, 0]}}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}
                    />
                </div>
            </a>
        </div>
    )
}

export default VerticalSwitch