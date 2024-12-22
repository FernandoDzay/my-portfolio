"use client"

import Image, { StaticImageData } from "next/image"
import { VerticalTimelineElement } from "react-vertical-timeline-component"



type Props = {
    title: string
    company_name: string
    icon: StaticImageData
    iconBg: string
    date: string
    points: string[]
}

const ExperienceCard:React.FC<Props> = (props) => {
    
    
    return (
        <VerticalTimelineElement
            contentStyle={{background: '#1d1836', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid #232631'}}
            date={props.date}
            iconStyle={{ background: props.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <Image src={props.icon} alt={props.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{props.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{props.company_name}</p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {props.points?.map((point, index) => (
                        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    )
}

export default ExperienceCard