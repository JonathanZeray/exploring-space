import { Cards } from "./components/Cards";
import "./App.css";
import { RocketModel } from "./components/RocketModel";

function App() {
  return (
    <div className="relative">
      <div id="rocket">
        <RocketModel />
      </div>
      <Cards />
    </div>
  );
}

export default App;
