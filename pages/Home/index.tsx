import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ExperienceSection from "./ExperienceSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "@/components/SharedSections/ContactSection"



type Props = LangProps

const Home:React.FC<Props> = () => {
    
    
    return (<>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
    </>)
}

export default Home