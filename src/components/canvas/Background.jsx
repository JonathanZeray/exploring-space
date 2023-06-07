import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Background({count}) {
  return (
    <div className="absolute -z-1 w-full h-full">
      <Canvas>
        <Stars count={count} />
      </Canvas>
    </div>
  );
}
