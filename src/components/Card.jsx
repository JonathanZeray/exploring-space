import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export function Card() {

  // Makes the sphere rotate
  // const myMesh = React.useRef();
  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   myMesh.current.rotation.y = a / 3;
  // });
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("../src/data/facts.json");
        const data = await response.json();
        setPlanets(data);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <>
      {planets.map((planet) => (
        <div
          key={planet.id}
          className=" text-center flex content-center py-10 h-screen flex-wrap"
        >
          <div className=" basis-1/2">
            <Canvas>
              {/* Lightning for sphere/Planet */}
              <ambientLight intensity={0.2} />
              <directionalLight />
              {/* Creating the Sphere/Planet */}
              <mesh rotation-x={0} >
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial map={useLoader(TextureLoader, planet.texture)} />
              </mesh>
            </Canvas>
          </div>
          <div className="text-white pt-6 w-2/3 bg-cover bg-gradient-to-r from-blue-950 to-slate-900 shadow-lg shadow-[#040c16] group container rounded-md basis-1/3">
            <h2 className="text-5xl my-4 font-bold inline border-b-4 border-sky-700 ">
              {planet.name}
            </h2>
            <p className="text-left p-10 flex-grow">{planet.info}</p>
          </div>
        </div>
      ))}
    </>
  );
}
