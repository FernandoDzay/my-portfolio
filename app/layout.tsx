export const dynamic = 'force-static';
import "./globals.css";

export default function RootLayout({ children }: {children: React.ReactNode}) {


    return (
        <>
            {children}
        </>
    )
  }