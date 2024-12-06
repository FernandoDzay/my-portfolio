import { styles } from '@/app/styles'
import ComputerCanvas from '../computerCanvas'
import VerticalSwitch from '../verticalSwitch'
import Section from '../section'


type Props = {}

const HeroSection:React.FC<Props> = () => {
    
    
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center absolute left-0 right-0 w-screen h-screen -z-10'></div>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className='w-full'>
                    <h1 className={`${styles.heroHeadText}`}>Hi, i'm <span className='text-[#915eff]'>Luis Dzay</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3D visuals, user <br className='sm:block hidden' />interfaces and web applications</p>
                </div>
            </div>
            <ComputerCanvas />
            <VerticalSwitch href='#about' />
        </section>
    )
}

export default HeroSection