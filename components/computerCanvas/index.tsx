"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import Computers from "./Computers"
import CanvasLoader from "./CanvasLoader"
import { OrbitControls, Preload } from "@react-three/drei"



type Props = {}

const ComputerCanvas:React.FC<Props> = () => {
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);

    
    return (
        <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas