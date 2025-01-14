"use client"

import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/utils/styles"
import Section from "@/components/Section"
import { textVariant } from "@/utils/motion"
import { motion } from 'framer-motion'
import { VerticalTimeline } from "react-vertical-timeline-component"
import ExperienceCard from "./ExperienceCard"
import abaccor from './abaccor.jpeg'
import caribbeanTransfers from './caribbean-transfers.png'
import etransfers from './etransfers.png'



type Props = LangProps


const Experience:React.FC<Props> = ({ lang }) => {
	const isEn = lang === 'en';


    const experiences = [
        {
            title: "Abaccor",
			subtitle: isEn ? "Full Stack Developer" : "Desarrollador Full Stack",
			icon: abaccor,
			iconBg: "#fff",
			date: `${isEn ? `November` : `Noviembre`} 2021 - ${isEn ? `Until Now` : `Actualidad`}`,
			points: isEn ? [
                "Full development of the company's administrative panel in React.js with Typescript, and Laravel.",
                "Development of the company's corporate website in Next.js.",
                "Creation of new company modules and optimization of existing ones.",
                "Improvement of critical aspects such as performance, scalability, and resource efficiency.",
                "Use of technologies such as React, Redux, Next.js, Laravel, PHP, SQL, and Nest.js.",
            ] : [
                "Desarrollo completo del panel administrativo de la empresa en React.js con Typescript, y Laravel",
                "Desarrollo del sitio web corporativo de la empresa en Next.js",
                "Creación de nuevos módulos de la empresa y optimizado los existentes",
                "Mejora de aspectos críticos como rendimiento, escalabilidad y eficiencia de los recursos.",
                "Uso de tecnologías como React, Redux, Next.js, Laravel, PHP, Nest.js, SQL.",
            ]
        },
        {
            title: "Caribbean Transfers",
			subtitle: isEn ? "Full Stack Developer" : "Desarrollador Full Stack",
			icon: caribbeanTransfers,
			iconBg: "#fff",
			date: `${isEn ? `January` : `Enero`} 2023 - ${isEn ? `December` : `Diciembre`} 2023`,
			points: isEn ? [
                "Intermediate project during my time at Abaccor.",
                "The project consists of a reservation system for transportation in Cancún.",
                "I built the entire website, both frontend and backend, following best practices to ensure fast load times and an excellent user experience.",
                "I used Next.js for the website and Express.js for the internal APIs, both implemented with TypeScript.",
            ] : [
                "Proyecto intermedio durante mi estadía en Abaccor",
                "El proyecto consiste en un sistema de reservas para transportación en Cancún",
                "Construí el sitio web entero, tanto Frontend como Backend, utilizando buenas prácticas para una buena velocidad de carga y experiencia de usuario",
                "Utilicé Next.js para el sitio web, y Express.js para las APIs internas, ambas tecnologías con Typescript",
            ]
        },
        {
            title: "Etransfers",
			subtitle: isEn ? `Full Stack Developer` : `Desarrollador Full Stack`,
			icon: etransfers,
			iconBg: "#fff",
			date: `${isEn ? `October` : `Octubre`} 2020 - ${isEn ? `November` : `Noviembre`} 2021`,
			points: isEn ? [
                'Web development and maintenance using Yii Framework (PHP)',
                "Full Web layout building, implementing best practices for optimal performance.",
                "Collaborating with teams including designers, SEO profesionals, and other developers to create high-quality products.",
                "Delivery of multiple projects for the transportation industry in Cancún.",
            ] : [
                "Desarrollo y mantenimiento web usando Yii Framework (PHP)",
                "Construcción completa de sitios web, utilizando buenas prácticas para un óptimo desempeño",
                "Colaboración con equipos de trabajo, incluyendo diseñadores gráficos, profesionales de SEO, y otros desarrolladores para crear productos de alta calidad",
                "Elaboración de numerosos proyectos para la industria de transportación en Cancún",
            ]
        },
    ];
    
    
    return (
        <Section id="experience">
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>{isEn ? `What I have done so far` : `Lo que he hecho hasta ahora`}</p>
                <h2 className={styles.sectionHeadText}>{isEn ? `Work Experience` : `Experiencia laboral`}</h2>
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