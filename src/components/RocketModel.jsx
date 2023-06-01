import { Canvas } from "@react-three/fiber";
import { Rocket } from "./canvas/Rocket";
import {
  OrbitControls,
  ScrollControls,
  PresentationControls,
} from "@react-three/drei";

export function RocketModel() {
  return (
    <Canvas camera={{ fov: 20 }}>
      <ambientLight intensity={2} color="#fff" />
      {/* <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} /> */}
      <ScrollControls pages={1} damping={0.4}>
        <PresentationControls
          snap // Skickar tillbaka modellen till start position oavsett hur man vridit den. 
           global // - gör att du kan dra vart som helst på hela canvasen, utan den måste du ha musen på modellen. 
          zoom={1.25} // högre zoom (2 ex), vid drag dras modellen närmare dig. 
          rotation={[0, -Math.PI / 3, 0]} 
          polar={[0, Math.PI / 4]} // Bestämmer vertikal begränsning
          azimuth={[-Math.PI / 1, Math.PI / 1]} // Horisontal begränsning
        >
          <Rocket />
        </PresentationControls>
      </ScrollControls>
    </Canvas>
  );
}
