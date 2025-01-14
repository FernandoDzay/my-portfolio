import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ExperienceSection from "./ExperienceSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "@/components/SharedSections/ContactSection"



type Props = LangProps

const Home:React.FC<Props> = ({ lang }) => {
    
    
    return (<>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactSection />
    </>)
}

export default Home