import { SpotLight, useGLTF } from "@react-three/drei";



type Props = {
    isMobile: boolean
}

const Computers:React.FC<Props> = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    
    
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <SpotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={.3}
                intensity={8}
                castShadow
                distance={100}
                decay={0}
            />
            <pointLight intensity={5} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

export default Computers