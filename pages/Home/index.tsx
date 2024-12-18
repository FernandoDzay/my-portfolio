import HeroSection from "./HeroSection"
import ExperienceSection from "./ExperienceSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "@/components/SharedSections/ContactSection"



type Props = LangProps

const Home:React.FC<Props> = () => {
    
    
    return (<>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
    </>)
}

export default Home