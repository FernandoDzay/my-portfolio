import ContactSection from "../contactSection"
import Experience from "../experience"
import HeroSection from "../heroSection"
import ProjectsSection from "../projectsSection"



type Props = LangProps

const Home:React.FC<Props> = () => {
    
    
    return (<>
        <HeroSection />
        <Experience />
        <ProjectsSection />
        <ContactSection />
    </>)
}

export default Home