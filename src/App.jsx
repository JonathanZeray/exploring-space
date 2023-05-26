import { Canvas } from "@react-three/fiber";
import { Rocket } from "./components/canvas/Rocket";
import { OrbitControls } from "drei/OrbitControls";

function App() {
  return (
    <>
      <Canvas style={{ width: 800, height: 800 }}>
        <ambientLight intensity={2} color="#fff" />
        <OrbitControls />
        <Rocket />
      </Canvas>
    </>
  );
}

export default App;
