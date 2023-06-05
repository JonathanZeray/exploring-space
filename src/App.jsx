import { Cards } from "./components/Cards";
import { RocketModel } from "./components/RocketModel";
import { Background } from "./components/canvas/Background";
import { Timeline } from "./components/Timeline";
import "./App.css";
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
      <Timeline />
    </div>
    </>
    
  );
}

export default App;
