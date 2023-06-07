import { Cards } from "./Cards";
import { RocketModel } from "./RocketModel";
import { Background } from "./canvas/Background";
import { RocketSound } from "./RocketSound";
import { SolarSystem } from "./SolarSystem";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import "../App.css";

export function Explore() {
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
      <Loader />
    </>
  );
}
