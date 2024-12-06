import Header from "@/components/header";
import LanguageProvider from "@/components/languageProvider";

export default function Layout({ children }: {children: React.ReactNode}) {


    return (
        <html lang="es">
            <body className="relative z-0 bg-primary">
                <Header lang="es" />
                <main>
                    <LanguageProvider lang="es">
                        {children}
                    </LanguageProvider>
                </main>
            </body>
        </html>
    )
  }