import { Cards } from "./Cards";
import { RocketModel } from "./RocketModel";
import { Background } from "./canvas/Background";
import { RocketSound } from "./RocketSound";
import { SolarSystem } from "./SolarSystem";
import { Loader } from "@react-three/drei";
import "../App.css";

export function Explore() {
  return (
    <>
      <div className="relative">
        <Background count={80000} />
        <RocketSound />
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
