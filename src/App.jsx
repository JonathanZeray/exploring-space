import { Cards } from "./components/Cards";
import "./App.css";
import { RocketModel } from "./components/RocketModel";
import { Canvas } from "@react-three/fiber";
import { Background } from "./components/canvas/Background";
import { RocketSound } from "./components/RocketSound";

function App() {
  return (
    <div className="relative">
      <Background />
      <RocketSound />
      <div id="rocket">
        <RocketModel />
      </div>
      <Cards />
    </div>
  );
}

export default App;
