import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";

export function Planet() {
  //Get texture for the sphere (Planet)
  const colorMap = useLoader(TextureLoader, "mars.jpg");
  // Makes the sphere rotate
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 3;
  });

  return (
    <>
      //Lightning
      <ambientLight intensity={0.2} />
      <directionalLight />
      // Planet
      <mesh rotation-x={-0.5} ref={myMesh}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
}
