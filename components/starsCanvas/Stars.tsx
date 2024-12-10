import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef, useState } from "react";


type Props = {}

const Stars:React.FC<Props> = (props) => {
    const ref = useRef<{rotation: {x: number, y: number}}>(null!);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  
    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
  
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
      </group>
    );
}

export default Stars