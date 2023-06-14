import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Timeline } from "./Timeline";
import { DoubleSide } from "three";
import { Float } from "@react-three/drei";
import { HeaderVisible, TextVisible } from "./WhenVisible";

export function Card() {
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

  const Planet = ({ planet }) => {
    const meshRef = useRef();
    const colorMap = useLoader(
      TextureLoader,
      "/assets/textures/saturn-rings.jpg"
    );

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      if (meshRef.current) {
        meshRef.current.rotation.y = a / 5;
      }
    });

    return (
      <>
        <mesh ref={meshRef} rotation-x={0}>
          <sphereGeometry attach="geometry" args={[2.5, 32, 32]} />
          <meshStandardMaterial
            map={useLoader(TextureLoader, planet.texture)}
          />
        </mesh>
        {planet.name === "Saturn" && ( // Add conditional rendering for Saturn
          <mesh rotation={[1.65, -0.13, -37.5]}>
            <ringGeometry attach="geometry" args={[3.8, 2.8, 65]} />
            <meshStandardMaterial map={colorMap} side={DoubleSide} />
          </mesh>
        )}
      </>
    );
  };

  return (
    <>
      {planets.map((planet, i) => (
        <div
          key={planet.id}
          className={`text-center flex content-center py-10 h-screen flex-wrap ${
            i % 2 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="basis-1/2">
            <Canvas>
              {/* Lighting for sphere/Planet */}
              <ambientLight intensity={0.2} />
              <directionalLight />
              {/* Creating the Sphere/Planet */}
              <Float floatIntensity={4} rotationIntensity={0.5}>
                <Planet planet={planet} />
              </Float>
            </Canvas>
          </div>
          <div className="text-white pt-6 w-2/3 bg-cover bg-gradient-to-r from-blue-950 to-slate-900 shadow-lg shadow-[#040c16] group container rounded-md basis-1/3">
            <HeaderVisible>
            <h2 className="text-5xl my-4 font-bold inline border-b-4 border-sky-700">
              {planet.name}
            </h2>
            </HeaderVisible>
            <TextVisible>
            <p className="text-left p-10 flex-grow">{planet.info}</p>
            </TextVisible>
          </div>
        </div>
      ))}
      <Timeline />
    </>
  );
}
