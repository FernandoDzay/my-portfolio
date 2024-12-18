import { LanguageContext } from "@/components/LanguageProvider"
import { useContext } from "react"



const useLang = () => {
    const lang = useContext(LanguageContext);
    return lang === 'en';
}

export default useLang