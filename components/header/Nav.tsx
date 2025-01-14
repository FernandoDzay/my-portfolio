"use client"

import { useEffect, useState } from "react"


type Props = {
    children: React.ReactNode
}

const Nav:React.FC<Props> = ({ children }) => {
    const [background, setBackground] = useState('bg-transparent');

    useEffect(() => {
        const changeBackgroundEvent = () => {
            if (window.scrollY > 0) setBackground('bg-primary');
            else setBackground('bg-transparent');
        }

        window.addEventListener("scroll", changeBackgroundEvent);
        return () => window.removeEventListener("scroll", changeBackgroundEvent);
    }, []);
    
    
    return (
        <nav className={`md:px-16 px-[15px] transition-colors w-full flex items-center py-5 top-0 z-20 ${background}`}>
            { children }
        </nav>
    )
}

export default Nav