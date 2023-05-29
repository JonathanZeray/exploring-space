import { Canvas } from "@react-three/fiber";
import { Rocket } from "./components/canvas/Rocket";
import { Cards } from "./components/Cards";
import { OrbitControls } from "drei/OrbitControls";
import "./App.css";

function App() {
  return (
    <div className="relative">
      <div id="rocket">
        <Canvas>
          <ambientLight intensity={2} color="#fff" />
          <OrbitControls />
          <Rocket />
        </Canvas>
      </div>
      <Cards />
    </div>
  );
}

export default App;
