import { Canvas } from "@react-three/fiber";
import { Rocket } from "./components/canvas/Rocket";
import { Card } from "./components/Card";
import { OrbitControls } from "drei/OrbitControls";
import "./App.css";

function App() {
  return (
    <>
      <Card />
      <Canvas>
        <ambientLight intensity={2} color="#fff" />
        <OrbitControls />
        <Rocket />
      </Canvas>
    </>
  );
}

export default App;
