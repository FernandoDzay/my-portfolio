import Image from "next/image";
import Link from "next/link";
import logo from './logo.png'
import LangToggler from "./LangToggler";
import Nav from "./Nav";


type Props = LangProps

const Header:React.FC<Props> = ({ lang }) => {
    const isEn = lang === 'en';


    return (
        <header className="fixed top-0 left-0 w-full z-10">
            <Nav>
                <div className="w-full flex justify-between gap-2 items-center max-w-7xl mx-auto">
                    <Link href={isEn ? `/` : `/es`} className="flex items-center gap-2">
                        <Image src={logo} className="w-[36px] h-auto object-contain" alt="Logo" title="Logo" />
                        <h1 className="text-white text-[18px] font-bold cursor-pointer flex gap-1">Luis Dzay <span className="sm:block hidden"> | {isEn ? `Software Engineer` : `Ingeniero de Software`}</span></h1>
                    </Link>
                    <ul className="list-none flex flex-row gap-3 sm:gap-10">
                        <li className="text-secondary hover:text-white text-[18px]">
                            <Link href={isEn ? `/projects` : `/es/proyectos`} title={isEn ? `Projects` : `Proyectos`}>{isEn ? `Projects` : `Proyectos`}</Link>
                        </li>
                        <li className="text-secondary hover:text-white text-[18px]">
                            <LangToggler />
                        </li>
                    </ul>
                </div>
            </Nav>
        </header>
    )
}

export default Header