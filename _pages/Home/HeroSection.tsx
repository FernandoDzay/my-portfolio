import { styles } from '@/utils/styles'
import VerticalSwitch from '@/components/VerticalSwitch'
import { ComputerCanvas } from '@/components/Canvas'


type Props = LangProps

const HeroSection:React.FC<Props> = ({ lang }) => {
    const isEn = lang === 'en';
    
    
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center absolute left-0 right-0 w-full h-screen -z-10'></div>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className='w-full'>
                    {isEn ? (<>
                        <h1 className={`${styles.heroHeadText}`}>Hi, i'm <span className='text-[#915eff]'>Luis Dzay</span></h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Software Engineer, with experience<br className='sm:block hidden' /> in creating modern web solutions.</p>
                    </>) : (<>
                        <h1 className={`${styles.heroHeadText}`}>Hola, soy <span className='text-[#915eff]'>Luis Dzay</span></h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>Un Ingeniero de software con experiencia<br className='sm:block hidden' /> en la creación de soluciones web modernas</p>
                    </>)}
                </div>
            </div>
            {process.env.NEXT_PUBLIC_SHOW_CANVAS === 'true' && (
                <ComputerCanvas />
            )}
            <VerticalSwitch href='#about' />
        </section>
    )
}

export default HeroSection