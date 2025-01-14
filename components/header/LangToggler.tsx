"use client"

import useLang from "@/hooks/useLang"
import Link from "next/link"
import { usePathname } from "next/navigation"
import flagEn from './flag_en.svg'
import flagEs from './flag_es.svg'
import Image from "next/image"



type Props = {}

const LangToggler:React.FC<Props> = () => {
    const isEn = useLang();
    const pathname = usePathname();

    const alternates = {
        '/': '/es',
        '/es': '/',

        '/projects': '/es/proyectos',
        '/es/proyectos': '/projects',
    } as Record<string, string>


    const getAlternate = (): string => {
        if( alternates[pathname] ) return alternates[pathname];
        return isEn ? `/es/proyectos/${pathname.substring(10)}` : `/projects/${pathname.substring(14)}`;
    }

    
    return (
        <Link className="flex items-center gap-2" href={getAlternate()}>
            <Image
                className="w-[20px] h-[15.625px]"
                src={isEn ? flagEs : flagEn}
                alt={isEn ? `Cambiar a inglés` : `Change to Spanish`}
                title={isEn ? `Cambiar a inglés` : `Change to Spanish`}
            />
            <span>{isEn ? `ES` : `EN`}</span>
        </Link>
    )
}

export default LangToggler