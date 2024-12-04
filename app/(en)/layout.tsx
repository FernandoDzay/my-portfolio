import Header from "@/components/header";
import LanguageProvider from "@/components/languageProvider";

export default function Layout({ children }: {children: React.ReactNode}) {


    return (
        <html lang="en">
            <body>
                <Header lang="en" />
                <main>
                    <LanguageProvider lang="en">
                        {children}
                    </LanguageProvider>
                </main>
            </body>
        </html>
    )
  }