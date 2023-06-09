import { Cards } from "./Cards";
import { RocketModel } from "./RocketModel";
import { Background } from "./canvas/Background";
import { SolarSystem } from "./SolarSystem";
import { Loader } from "@react-three/drei";
import "../App.css";

export function Explore() {
  return (
    <>
      <div className="relative">
        <Background count={80000} />
        <div id="rocket">
          <RocketModel />
        </div>
        <Cards />
      </div>
      <SolarSystem />
      <Loader />
    </>
  );
}
