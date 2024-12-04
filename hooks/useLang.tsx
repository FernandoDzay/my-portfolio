import { LanguageContext } from "@/components/languageProvider"
import { useContext } from "react"



const useLang = () => {
    const lang = useContext(LanguageContext);
    return lang === 'en';
}

export default useLang