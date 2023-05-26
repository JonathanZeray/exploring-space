import { Canvas } from "@react-three/fiber";
import { Rocket } from "./components/canvas/Rocket";
import { OrbitControls } from "drei/OrbitControls";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={2} color="#fff" />
        <OrbitControls />
        <Rocket />
      </Canvas>
    </>
  );
}

export default App;
