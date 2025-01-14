import MasterLayout from "@/components/MasterLayout";
import { styles } from "@/utils/styles";
import Link from "next/link";


export default function NotFound() {
	return (
		<MasterLayout lang="en" index={false}>
			<section className='relative w-full h-screen mx-auto'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center absolute left-0 right-0 w-full h-screen -z-10'></div>
				<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
					<div className='flex flex-col justify-center items-center mt-5'>
						<div className='w-5 h-5 rounded-full bg-[#915eff]' />
						<div className='w-1 sm:h-80 h-40 violet-gradient' />
					</div>
					<div className='w-full'>
						<h1 className={`${styles.heroHeadText}`}><span className='text-[#915eff]'>Not found</span></h1>
						<p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm sorry, this route doesn't exist<br className='sm:block hidden' />You can return to the homepage <Link className="hover:text-blue-600 underline" href="/" title="Home Page">Here</Link>.</p>
					</div>
				</div>
			</section>
		</MasterLayout>
	)
}