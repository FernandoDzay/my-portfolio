


type Props = LangProps

const Header:React.FC<Props> = ({ lang }) => {
    const isEn = lang === 'en';
    
    return (
        <>{isEn ? 'This is the header' : 'Este es el header'}</>
    )
}

export default Header