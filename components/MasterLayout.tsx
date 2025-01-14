import Header from "@/components/Header"
import LanguageProvider from "@/components/LanguageProvider"


type Props = LangProps & {
    children: React.ReactNode
    index: boolean
}

const MasterLayout:React.FC<Props> = ({ lang, children, index }) => {
    const isEn = lang === 'en';
    
    
    return (
        <html lang={lang}>
            <head>
                <meta charSet="UTF-8" />
                <title>{isEn ? `Luis Dzay | Software Engineer` : `Luis Dzay | Ingeniero de Software`}</title>
                <meta name="description" content={isEn ? 'I am Luis Fernando Dzay Villanueva, a Full Stack Developer with experience in creating modern web solutions. Explore my projects and learn more about my approach to technology and development.' : 'Soy Luis Fernando Dzay Villanueva, un desarrollador Full Stack con experiencia en la creación de soluciones web modernas. Explora mis proyectos y conoce más sobre mi enfoque en tecnología y desarrollo.'} />
                <meta name="keywords" content={isEn ? 'Luis Dzay, Software Engineer, Full Stack Developer, Porfolio, Projects' : 'Luis Dzay, Ingeniero de Software, Full Stack Developer, Portafolio, Proyectos'} />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="robots" content={index ? `index` : `noindex`} />
            </head>
            <body className="relative z-0 w-full bg-primary">
                <LanguageProvider lang={lang}>
                    <Header lang={lang} />
                </LanguageProvider>
                <main>
                    <LanguageProvider lang={lang}>
                        {children}
                    </LanguageProvider>
                </main>
            </body>
        </html>
    )
}

export default MasterLayout