"use client"
import { createContext } from "react";


type AcceptTheme = 'light'|'dark';
type Props = {
    children: React.ReactNode
    theme: AcceptTheme
}

export const ThemeContext = createContext<AcceptTheme>('dark');

const ThemeProvider:React.FC<Props> = ({ theme, children }) => {
    
    
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider