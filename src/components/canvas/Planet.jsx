import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";

export function Planet() {
  //Get texture for the sphere (Planet)
  const colorMap = useLoader(TextureLoader, "/assets/textures/venus.jpg");
  // Makes the sphere rotate
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 3;
  });

  return (
    <>
      {/* Lightning for sphere/Planet */}
      <ambientLight intensity={0.2} />
      <directionalLight />
      {/* Creating the Sphere/Planet */}
      <mesh rotation-x={0} ref={myMesh}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
}
