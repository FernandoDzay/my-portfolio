import Header from "@/components/Header";
import LanguageProvider from "@/components/LanguageProvider";

export default function Layout({ children }: {children: React.ReactNode}) {


    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" type="image/x-icon" href="/logo.svg" />
            </head>
            <body className="relative z-0 w-full bg-primary">
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