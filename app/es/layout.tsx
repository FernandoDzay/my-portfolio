import MasterLayout from "@/components/MasterLayout";

export default function Layout({ children }: {children: React.ReactNode}) {


    return (
        <MasterLayout lang="es" index={process.env.ROBOTS_INDEX === 'true'}>
            { children }
        </MasterLayout>
    )
  }