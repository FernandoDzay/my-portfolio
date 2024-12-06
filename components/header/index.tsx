import { styles } from "@/app/styles";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import logo from './logo.svg'


type Props = LangProps

const Header:React.FC<Props> = ({ lang }) => {
    const isEn = lang === 'en';
    
    return (
        <header className="fixed top-0 left-0 w-full z-10">
            <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <Link href="#" className="flex items-center gap-2">
                        <Image src={logo} className="w-9 h-9 object-contain" alt="Logo" title="Logo" />
                        <p className="text-white text-[18px] font-bold cursor-pointer flex gap-1">Luis Fernando <span className="sm:block hidden"> | Fullstack developer</span></p>
                    </Link>
                    <ul className="list-none hidden sm:flex flex-row gap-10">
                        {navLinks.map(link => (
                            <li key={link.id} className="text-secondary hover:text-white text-[18px]">
                                <Link href={`#${link.id}`}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header