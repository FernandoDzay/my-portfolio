import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Stars from "./Stars";
import { Preload } from "@react-three/drei";
import CanvasLoader from "../computerCanvas/CanvasLoader";



type Props = {}

const StarsCanvas:React.FC<Props> = () => {
    
    
    return (
        <div className='w-full h-auto absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                    <Suspense fallback={<CanvasLoader />}>
                        <Stars />
                    </Suspense>
            
                    <Preload all />
            </Canvas>
        </div>
      );
}

export default StarsCanvas