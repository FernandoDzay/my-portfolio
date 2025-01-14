import { StaticImageData } from "next/image"

// ------- images
import abaccor from './project-images/abaccor.png'
import ahs from './project-images/ahs.png'
import aiportcancun from './project-images/airportcancun.png'
import faceRecognitionApp from './project-images/face-recognition-app.jpeg'
import lavadora from './project-images/lavadora.jpeg'
import lena from './project-images/lena.jpeg'
import officeLunch from './project-images/office_lunch.jpg'
import pos from './project-images/pos.png'
import puertoVallarta from './project-images/puertovallarta.png'
import señales from './project-images/señales.jpeg'
import todoList from './project-images/todolist.jpeg'
import val from './project-images/val.png'
import caribbeanTransfers from './project-images/caribbean-transfers.png'
import abaccor_site from './project-images/abaccor_site.png'
import abaccor_panel from './project-images/abaccor_panel.png'
import etransfers from './project-images/etransfers.png'
import portfolio from './project-images/portfolio.png'
import { getTechnologiesByHashtags, type Technology } from "./technologiesJson"
/* ------------ */

type TranslationItems = {
    name: string
    briefDescription: string
    fullDescription: string[]
}

type Filter = 'recent'|'importants'|'programming'|'transportation'|'mechatronics'|'university'|'show-in-home-page';

export type Project = {
    slug: string
    filters: Filter[]
    image: StaticImageData
    technologies: Technology[]
    seeLiveLink?: string
    sourceCodeLink?: string
    en: TranslationItems
    es: TranslationItems
}

export const getProjectsByFilters = (filters: Filter[]) => {
    return projectsJson
    .filter(project =>
        filters.every(filter => project.filters.includes(filter))
    )
    .sort((a, b) => {
        const aIndex = Math.min(...a.filters.map(f => filters.indexOf(f)).filter(index => index !== -1));
        const bIndex = Math.min(...b.filters.map(f => filters.indexOf(f)).filter(index => index !== -1));
        return aIndex - bIndex;
    });
}

export const getProjectBySlug = (slug: string) => {
    return projectsJson.find(project => project.slug === slug);
}

const projectsJson: Project[] = [
    {
        slug: 'abaccor-app',
        filters: ['recent', 'importants', 'show-in-home-page'],
        image: abaccor,
        technologies: getTechnologiesByHashtags(['react', 'redux', 'react_query', 'laravel', 'php', 'nestjs', 'nextjs', 'docker']),
        seeLiveLink: 'https://www.abaccor.com',
        en: {
            name: 'Abaccor',
            briefDescription: 'Comprehensive billing and accounting solution for SMEs in Mexico.',
            fullDescription: [
                'Abaccor is an accounting management platform designed for small and medium-sized businesses in Mexico.',
                'It integrates key features such as connection with the SAT for invoice stamping and downloading, and with banking institutions to keep financial transactions up to date.',
                'I work as a Full Stack developer at the company, where I have created a wide range of new modules and optimized existing ones, improving critical aspects such as performance, scalability, and resource efficiency.',
                'I also fully developed the administrative panel and the corporate website of Abaccor, contributing to a smoother and more efficient user experience.'
            ],
        },
        es: {
            name: 'Abaccor',
            briefDescription: 'Solución integral de facturación y contabilidad para PYMES en México.',
            fullDescription: [
                'Abaccor es una plataforma de gestión contable diseñada para pequeñas y medianas empresas en México.',
                'Integra funcionalidades clave como la conexión con el SAT para timbrado y descarga de facturas, así como con instituciones bancarias para mantener al día los movimientos financieros.',
                'Soy desarrollador Full-stack en la empresa, donde he creado gran variedad de nuevos módulos y optimizado los existentes, mejorando aspectos críticos como rendimiento, escalabilidad y eficiencia de los recursos.',
                'De igual manera, yo desarrollé por completo el panel administrativo, así como de la creación del sitio web corporativo de Abaccor, contribuyendo a una experiencia de usuario más fluida y eficiente.'
            ],
        }
    },
    {
        slug: 'caribbean-transfers',
        filters: ['recent', 'importants', 'show-in-home-page'],
        image: caribbeanTransfers,
        technologies: getTechnologiesByHashtags(['nextjs', 'express', 'typescript', 'mysql', 'scss']),
        seeLiveLink: 'https://caribbean-transfers.com',
        en: {
            name: 'Caribbean Transfers',
            briefDescription: 'Complete website development dedicated to selling private transportation in Cancun and major destinations in Quintana Roo.',
            fullDescription: [
                'Website dedicated to selling private transportation in Cancun and other major destinations in Quintana Roo.',
                'I developed the entire website from scratch using Next.js in 2023.',
                'In 2024, the site was rebuilt in Laravel by other developers due to a new company administration. However, I still provide maintenance for the project occasionally.'
            ],
        },
        es: {
            name: 'Caribbean Transfers',
            briefDescription: 'Desarrollo completo de sitio dedicado a vender transportación privada en Cancún o destinos principales de Quintana Roo.',
            fullDescription: ['Sitio dedicado a vender transportación privada en Cancún o destinos principales de Quintana Roo.', 'Desarrollé todo el sitio desde cero, utilizando nextjs en 2023', 'En 2024 el sitio fue reconstruido en Laravel por otros desarrolladores debido a una nueva administración de la empresa. Sin embargo, de vez en cuando sigo brindando mantenimiento al proyecto.'],
        }
    },
    {
        slug: 'abaccor-site',
        filters: ['recent', 'importants'],
        image: abaccor_site,
        technologies: getTechnologiesByHashtags(['nextjs', 'typescript', 'scss']),
        seeLiveLink: 'https://www.abaccor.com',
        en: {
            name: 'Abaccor Site',
            briefDescription: 'Corporate website for Abaccor, developed with Next.js for high performance and SEO optimization.',
            fullDescription: [
                'Abaccor is an integrated accounting and management platform aimed at small and medium-sized businesses in Mexico.',
                'It offers integration with SAT for invoice stamping and downloading, as well as with banks to keep financial transactions up to date.',
                'I developed this corporate website to promote the Abaccor software. I used Next.js to ensure optimal performance and a fully SEO-optimized structure, which improves search engine visibility and the user experience.'
            ],
        },
        es: {
            name: 'Abaccor Site',
            briefDescription: 'Sitio web corporativo de Abaccor, desarrollado en Next.js para un alto rendimiento y optimización SEO.',
            fullDescription: [
                'Abaccor es una plataforma integral de gestión contable y administrativa dirigida a pequeñas y medianas empresas en México.',
                'Ofrece integración con el SAT para timbrado y descarga de facturas, así como con bancos para mantener actualizados los movimientos financieros.',
                'Desarrollé este sitio web corporativo con el objetivo de promover el software de Abaccor. Utilicé Next.js para garantizar un rendimiento óptimo y una estructura completamente optimizada para SEO, lo que mejora la visibilidad en buscadores y la experiencia del usuario.'
            ],
        }
    },
    {
        slug: 'abaccor-admin-panel',
        filters: ['recent', 'importants', 'show-in-home-page'],
        image: abaccor_panel,
        technologies: getTechnologiesByHashtags(['react', 'redux', 'typescript', 'rtk_query', 'laravel', 'ant_design']),
        en: {
            name: 'Abaccor Admin Panel',
            briefDescription: 'Abaccor administrative panel developed for comprehensive management of operations and users.',
            fullDescription: [
                'The Abaccor Admin Panel is a key tool for managing internal operations, functioning as a full CRM.',
                'I completely developed this panel, which allows the management of user permissions, payments, plans, accounts, subscriptions, and other critical features for the proper functioning of the system.'
            ],
        },
        es: {
            name: 'Abaccor Admin Panel',
            briefDescription: 'Panel administrativo de Abaccor, desarrollado para gestión integral de operaciones y usuarios.',
            fullDescription: [
                'El Panel Administrativo de Abaccor es una herramienta clave para la gestión de operaciones internas, funcionando como un CRM integral.',
                'Desarrollé completamente este panel, que permite gestionar permisos de usuario, pagos, planes, cuentas, suscripciones y otras funcionalidades críticas para el buen funcionamiento del sistema.'
            ],
        }
    },
    {
        slug: 'my-portfolio',
        filters: ['importants', 'recent'],
        image: portfolio,
        technologies: getTechnologiesByHashtags(['nextjs', 'typescript', 'docker', 'tailwind', 'framer_motion', 'threejs']),
        seeLiveLink: 'https://www.luisdzay.com',
        sourceCodeLink: 'https://github.com/FernandoDzay/my-portfolio',
        en: {
            name: 'This Portfolio',
            briefDescription: 'My personal portfolio, where I showcase my projects, experience, and skills as a Full Stack developer.',
            fullDescription: [
                'This portfolio is where I present my projects, experience, and skills as a Full Stack developer. Here, I share my most notable projects, which cover web application development.',
                "In this portfolio, you can learn more about my work experience, the challenges I have faced, and how each project has contributed to my growth as a professional. If you'd like, you can also contact me.",
                'I developed this project using Next.js, implementing all of my experience in creating websites, optimizing loading speed, and following best practices for SEO.'
            ],
        },
        es: {
            name: 'Este portafolio',
            briefDescription: 'Mi portafolio personal, donde presento mis proyectos, experiencia y habilidades como desarrollador Full Stack.',
            fullDescription: [
                'Este portafolio es en donde presento mis proyectos, experiencia y habilidades como desarrollador Full Stack. En él, comparto mis proyectos más destacados, que abarcan el desarrollo de aplicaciones web.',
                'En este portafolio podrás conocer más sobre mi experiencia laboral, los desafíos que he enfrentado, y cómo cada proyecto ha contribuido a mi crecimiento como profesional. Y si lo deseas, también podrías contactarme',
                'Desarrollé este proyecto utilizando next.js, implementando toda la experiencia que tengo en la creación de sitios web, optimizando la velocidad de carga, e implementando buenas prácticas para SEO.'
            ],
        }
    },

    // ----------- transportation
    {
        slug: 'etransfers',
        filters: ['transportation'],
        image: etransfers,
        technologies: getTechnologiesByHashtags(['yiiframework', 'php', 'html', 'jquery', 'javascript', 'scss']),
        seeLiveLink: 'https://etransfers.com',
        en: {
            name: 'Etransfers',
            briefDescription: 'Contribution to feature implementation for the Etransfers company.',
            fullDescription: [
                'Website dedicated to selling private transportation in Cancun and major destinations in Quintana Roo.',
                'I participated in implementing various features for the company, such as design changes, adding Tours to the site, creating sub-routes, and building seasonal landing pages.'
            ],
        },
        es: {
            name: 'Etransfers',
            briefDescription: 'Participación en la implementación de features para la empresa de Etransfers',
            fullDescription: ['Sitio dedicado a vender transportación privada en Cancún o destinos principales de Quintana Roo.', 'Participé en la implementación de diferentes features para la empresa, como cambios de diseño, implementación de Tours en el sitio, maquetación de subrutas en el mismo sitio, y landings de temporada'],
        }
    },
    {
        slug: 'airporthotelshuttle',
        filters: ['transportation'],
        image: ahs,
        technologies: getTechnologiesByHashtags(['yiiframework', 'php', 'html', 'jquery', 'javascript', 'scss']),
        seeLiveLink: 'https://www.airporthotelshuttle.com',
        en: {
            name: 'Airport Hotel Shuttle',
            briefDescription: 'Complete website development dedicated to selling private transportation in Cancun and major destinations in Quintana Roo.',
            fullDescription: [
                'Website dedicated to selling private transportation in Cancun and other major destinations in Quintana Roo.',
                'This site was one of the many I developed for Etransfers, as they were considered "extensions" of the main Etransfers site.'
            ],
        },
        es: {
            name: 'Airport Hotel Shuttle',
            briefDescription: 'Desarrollo completo de sitio dedicado a vender transportación privada en Cancún o destinos principales de Quintana Roo.',
            fullDescription: ['Sitio dedicado a vender transportación privada en Cancún o destinos principales de Quintana Roo.', 'Este sitio fue uno de los tantos que desarrollé para la empresa de Etransfers, ya que éstos, se consideraban como unas "extensiones" del mismo sitio de ET'],
        }
    },
    {
        slug: 'valmovilidad',
        filters: ['transportation'],
        image: val,
        technologies: getTechnologiesByHashtags(['yiiframework', 'php', 'html', 'jquery', 'javascript', 'scss']),
        seeLiveLink: 'https://www.valmovilidad.com',
        en: {
            name: 'Valmovilidad',
            briefDescription: 'Complete website development dedicated to selling private transportation in Cancun and major destinations in Quintana Roo.',
            fullDescription: [
                'Website dedicated to selling private transportation in Cancun and other major destinations in Quintana Roo.',
                'This site was one of the many I developed for Etransfers, as they were considered "extensions" of the main Etransfers site.'
            ],
        },
        es: {
            name: 'valmovilidad',
            briefDescription: 'Desarrollo completo de sitio dedicado a vender transportación privada en Cancún o destinos principales de Quintana Roo.',
            fullDescription: ['Sitio dedicado a vender transportación privada en Cancún o destinos principales de Quintana Roo.', 'Este sitio fue uno de los tantos que desarrollé para la empresa de Etransfers, ya que éstos, se consideraban como unas "extensiones" del mismo sitio de ET'],
        }
    },
    {
        slug: 'etransfers-point-of-sale',
        filters: ['transportation'],
        image: pos,
        technologies: getTechnologiesByHashtags(['yiiframework', 'php', 'html', 'jquery', 'javascript', 'scss']),
        en: {
            name: 'Etransfers POS',
            briefDescription: 'Web application developed as a point-of-sale solution for transportation services in Cancun.',
            fullDescription: [
                'Web application developed as a point-of-sale system for transportation in Cancun.',
                'This app is used by transportation vendors at Cancun Airport. Besides the Etransfers website, which facilitates online transportation bookings, the company wanted to implement physical sales directly at the airport.'
            ],
        },
        es: {
            name: 'POS para Etransfers',
            briefDescription: 'Aplicación web orientada a una aplicación de punto de venta para transportación en Cancún.',
            fullDescription: ['Aplicación web orientada a una aplicación de punto de venta para transportación en Cancún.', 'Los usuarios de esta App, son vendedores de transportación en el Aeropuerto de Cancún, ya que además del sitio web de Etransfers que provee la compra el linea de transportación, la empresa quiso implementar ventas físicas diréctamente en el Aeropuerto'],
        }
    },
    {
        slug: 'puertovallartacarrental',
        filters: ['transportation'],
        image: puertoVallarta,
        technologies: getTechnologiesByHashtags(['yiiframework', 'php', 'html', 'jquery', 'javascript', 'scss']),
        seeLiveLink: 'https://www.puertovallartacarrental.net',
        en: {
            name: 'City Car Rental Puerto Vallarta',
            briefDescription: 'Frontend development for a site dedicated to car rental services.',
            fullDescription: [
                'Website dedicated to providing car rental services in Puerto Vallarta.',
                'The project already existed, including the car rental API, but the company required a complete redesign of the frontend. The old design was outdated, and the page was slow and not optimized for SEO.',
                'I worked on the complete frontend development from scratch.'
            ],
        },
        es: {
            name: 'City Car Rental Puerto Vallarta',
            briefDescription: 'Desarrollo Frontend de sitio dedicado a proveer servicios de Renta de autos.',
            fullDescription: ['Sitio web que dedicado a proveer servicios de Renta de autos en Puerto Vallarta.', 'El proyecto ya existía, incluyendo el API de la renta de autos, sin embargo, la empresa requería un rediseño de todo el frontend, ya que los estilos estaban muy antígüos, y la página estaba lenta, sin estar optimizada para SEO.', 'Trabajé en el desarrollo de todo el frontend desde cero.'],
        }
    },
    {
        slug: 'airportcancun',
        filters: ['transportation'],
        image: aiportcancun,
        technologies: getTechnologiesByHashtags(['yiiframework', 'php', 'html', 'jquery', 'javascript', 'scss']),
        seeLiveLink: 'https://www.airportcancun.com',
        en: {
            name: 'airportcancun.com',
            briefDescription: 'Complete frontend development for a website offering various services and information related to Cancun Airport.',
            fullDescription: [
                'Website providing information and various services for Cancun Airport.',
                'Services include transportation, car rentals, tours, and hotels. It also offers information about Cancun, Playa del Carmen, Tulum, Puerto Aventuras, Playa Mujeres, and Akumal, as well as a blog, flight tracking, lost and found, duty-free shopping, and more.',
                'I worked on the complete frontend development from scratch.'
            ],
        },
        es: {
            name: 'airportcancun.com',
            briefDescription: 'Desarrollo completo del Frontend de sitio web dedicado a ofrecer distintos información y distintos servicios del Aeropuerto de Cancún.',
            fullDescription: ['Sitio web que brinda información y distintos servicios del Aeropuerto de Cancún.', 'Servicios como por ejemplo: Transportación, renta de autos, tours y hoteles. Además, también cuenta con: Información acerca de Cancún, Playa del Carmen, Tulum, Puerto Aventuras, Playa Mujeres y Akumal; blog, monitoreo de vuelo, objetos perdidos, duty free, entre otros.', 'Trabajé en el desarrollo de todo el frontend desde cero.'],
        }
    },
    

    {
        slug: 'office-lunch-platform',
        filters: ['programming'],
        image: officeLunch,
        technologies: getTechnologiesByHashtags(['react', 'redux', 'express', 'scss', 'mysql']),
        seeLiveLink: 'https://office-lunch-platform.luisdzay.com',
        sourceCodeLink: 'https://github.com/FernandoDzay/office-lunch-react',
        en: {
            name: 'Office Lunch Platform',
            briefDescription: 'Web application managing lunch orders for office employees.',
            fullDescription: [
                'This web application manages a lunch ordering system for office employees, allowing the administration of menus, prices, orders, and payments. It includes a complete CRUD management system for administrators, employees, meals, orders, and payments.',
                'I developed this application from scratch as a personal project, motivated by the desire to improve my programming skills while providing a real solution to the company’s problems.',
                'Motivation: The office offered lunch to employees, but the management of menus, prices, and payments was manual, using an Excel sheet. This led to a tedious and error-prone process. The solution automates this process, improving efficiency and reducing mistakes.'
            ],
        },
        es: {
            name: 'Office Lunch Platform',
            briefDescription: 'Aplicación web que gestiona un sistema de almuerzos para empleados de una oficina.',
            fullDescription: ['Esta aplicación web gestiona un sistema de almuerzos para empleados en una oficina, permitiendo la administración de menús, precios, órdenes y pagos. Incluye un sistema completo de gestión (CRUD) para administradores, empleados, comidas, órdenes y pagos.', 'Desarrollé la aplicación desde cero como un proyecto personal, motivado por el deseo de mejorar mis habilidades de programación, al mismo tiempo que proporcionaba una solución real a los problemas de la empresa.', 'Motivación: La oficina ofrecía almuerzos a sus empleados, pero la gestión de menús, precios y pagos era manual, utilizando una hoja de Excel. Esto resultaba en un proceso tedioso y propenso a errores. La solución automatiza todo este proceso, mejorando la eficiencia y reduciendo el riesgo de equivocaciones.'],
        }
    },
    {
        slug: 'face-recognition-app',
        filters: ['programming', 'university'],
        image: faceRecognitionApp,
        technologies: getTechnologiesByHashtags(['react', 'redux', 'express']),
        seeLiveLink: 'https://fernandodzay.github.io/smart-brain',
        sourceCodeLink: 'https://github.com/FernandoDzay/smart-brain',
        en: {
            name: 'Face Recognition App',
            briefDescription: 'Web application for facial recognition.',
            fullDescription: [
                'A web application for facial recognition. Created for learning purposes, it was my first SPA using React.js at university.',
                'For face detection, I used Clarifai’s API.',
                'Some of the key technologies used include Express, Postgres, bcrypt-library, and Tachyons for styles.'
            ],
        },
        es: {
            name: 'Face Recognition App',
            briefDescription: 'Aplicación web de reconocimiento facial.',
            fullDescription: ['Aplicación web de reconocimiento facial. Creada para propósitos de apredizaje, fue mi primer SPA utilizando React.js en la universidad.', 'Para la detección de rostros, se utilizaron servicios de clarifai.com.', 'Entre las herramientas más importantes, se utilizaron Express, Postgres, bcrypt-library y Tachyons para los estilos.'],
        }
    },
    {
        slug: 'to-do-list',
        filters: ['programming', 'university'],
        image: todoList,
        technologies: getTechnologiesByHashtags(['android_studio']),
        sourceCodeLink: 'https://github.com/FernandoDzay/To-Do-List',
        en: {
            name: 'To-Do List',
            briefDescription: 'Mobile application for creating a to-do list developed in Android Studio.',
            fullDescription: [
                'A mobile application for creating a to-do list.',
                'Created for learning purposes. This was the final project of a course I took to learn how to build mobile applications using Android Studio in Java.'
            ],
        },
        es: {
            name: 'To-Do List',
            briefDescription: 'Aplicación móvil que consiste en un To-Do-List desarrollada en Android Studio.',
            fullDescription: ['Aplicación móvil que consiste en un To-Do-List.', 'Creada para propósitos de aprendizaje. Este fue el proyecto final de un curso que tomé para aprender a crear Aplicaciones móviles utilizando Android Studio en Java'],
        }
    },
    {
        slug: 'fpga-edge-detection',
        filters: ['programming', 'university'],
        image: lena,
        technologies: getTechnologiesByHashtags(['hdl', 'fpga', 'matlab']),
        sourceCodeLink: 'https://github.com/FernandoDzay/Detector-de-bordes-FPGA',
        en: {
            name: 'FPGA Edge Detection',
            briefDescription: 'Edge detection project using FPGA through digital signal processing, programmed in HDL Verilog, MATLAB, and Raspberry Pi.',
            fullDescription: [
                'This project involved designing and implementing an edge detection system using FPGA technology through digital signal processing (DSP). Using the HDL Verilog hardware description language, I programmed the system to detect edges in images or input signals with high efficiency in real-time.',
                'The project integrated several technologies, starting with the implementation of the edge detection algorithm in Verilog for the FPGA, leveraging its parallel processing capabilities to analyze signals quickly and efficiently. Additionally, MATLAB was used for simulation and validation of the algorithm before it was implemented on the FPGA, ensuring its correct operation and optimization.',
                'The final part of the project involved integrating with a Raspberry Pi, which acted as a controller for the FPGA. The system received input signals via the Raspberry Pi and processed the edge detection results, allowing for more dynamic interaction with the hardware and providing an accessible means for visualizing and analyzing processed data.',
                'This project deepened my understanding of advanced signal processing concepts and embedded system design, as well as giving me a thorough understanding of using FPGAs for high-speed applications. It also allowed me to work with tools like Verilog and MATLAB, and become familiar with using Raspberry Pi as a control platform for embedded systems, making it a rewarding experience for my engineering development.'
            ],
        },
        es: {
            name: 'Detector de bordes con FPGA',
            briefDescription: 'Proyecto de detección de bordes utilizando FPGA mediante procesamiento digital de señales, programado en HDL Verilog, MATLAB y Raspberry Pi.',
            fullDescription: [
                'Este proyecto consistió en el diseño e implementación de un sistema de detección de bordes utilizando tecnología FPGA (Field Programmable Gate Array) mediante procesamiento digital de señales (DSP). Utilizando el lenguaje de descripción de hardware HDL Verilog, programé el sistema para que pudiera detectar bordes en imágenes o señales de entrada con alta eficiencia en tiempo real.',
                'El proyecto integró varias tecnologías, comenzando con la implementación del algoritmo de detección de bordes en Verilog para la FPGA, aprovechando su capacidad de procesamiento paralelo para realizar el análisis de señales de manera rápida y eficiente. Además, se utilizó MATLAB para la simulación y validación del algoritmo antes de llevarlo a la FPGA, asegurando su correcta implementación y optimización.',
                'La parte final del proyecto incluyó la integración con una Raspberry Pi, que actuó como controlador para la FPGA. A través de la Raspberry Pi, el sistema recibió las señales de entrada y procesó los resultados de la detección de bordes, permitiendo una interacción más dinámica y flexible con el hardware, al mismo tiempo que proporcionaba un medio accesible para la visualización y análisis de los datos procesados.',
                'Este proyecto me permitió profundizar en conceptos avanzados de procesamiento digital de señales y diseño de sistemas embebidos, a la vez que me dio una comprensión profunda del uso de FPGAs en aplicaciones de alta velocidad. Además, me brindó la oportunidad de trabajar con herramientas como Verilog y MATLAB, y de familiarizarme con la Raspberry Pi como plataforma de control para sistemas embebidos, lo que resultó ser una experiencia enriquecedora para mi desarrollo como ingeniero.'
            ],
        }
    },
    {
        slug: 'matlab-signal-processing',
        filters: ['mechatronics', 'university'],
        image: señales,
        technologies: getTechnologiesByHashtags(['matlab']),
        sourceCodeLink: 'https://github.com/FernandoDzay/Matlab-GUI-Signal-Operations',
        en: {
            name: 'MATLAB Signal Processing',
            briefDescription: 'MATLAB GUI for graphing and processing signals.',
            fullDescription: [
                'A MATLAB GUI for graphing and performing operations on signals, such as Fourier series, phase and amplitude spectra, Laplace transforms, and convolutions.'
            ],
        },
        es: {
            name: 'Procesamiento de señales con MATLAB',
            briefDescription: 'Interfaz gráfica de MATLAB que permite graficar y procesar de señales.',
            fullDescription: ['Interfaz gráfica de MATLAB que permite graficar y hacer operaciones de señales tales como: Series de Fourier, espectros de fase y amplitud, transformada Laplace y convolución.'],
        }
    },
    {
        slug: 'washing-machine-automation',
        filters: ['mechatronics'],
        image: lavadora,
        technologies: getTechnologiesByHashtags(['arduino', 'c++']),
        sourceCodeLink: 'https://github.com/FernandoDzay/Automatizacion-Lavadora',
        en: {
            name: 'Washing Machine Automation',
            briefDescription: 'Automation of water filling in a household washing machine.',
            fullDescription: [
                'Automation of water filling in a household washing machine, programmed in C, using an Arduino as the digital controller.'
            ],
        },
        es: {
            name: 'Automatización de lavadora',
            briefDescription: 'Automatización del llenado de agua de lavadora casera.',
            fullDescription: ['Automatización del llenado de agua de lavadora casera, programado en C, usando Arduino como controlador digital.'],
        }
    },
]

export default projectsJson;