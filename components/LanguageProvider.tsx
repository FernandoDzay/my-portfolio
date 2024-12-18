"use client"

import { createContext } from "react";


type AcceptLanguage = 'en'|'es';
type Props = {
    children: React.ReactNode
    lang: AcceptLanguage
}

export const LanguageContext = createContext<AcceptLanguage>('en');

const LanguageProvider:React.FC<Props> = ({ lang, children }) => {
    
    
    return (
        <LanguageContext.Provider value={lang}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider