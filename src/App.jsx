import { Cards } from "./components/Cards";
import { RocketModel } from "./components/RocketModel";
import { Background } from "./components/canvas/Background";
import { RocketSound } from "./components/RocketSound";
import { SolarSystem } from "./components/SolarSystem";
import "./App.css";

function App() {
  return (
    <>
      <div className="relative">
        <Background />
        <RocketSound />
        <div id="rocket">
          <RocketModel />
        </div>
        <Cards />
      </div>
      <SolarSystem />
    </>
  );
}

export default App;
