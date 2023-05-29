import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";

export function Planet() {
  const colorMap = useLoader(TextureLoader, "mars.jpg");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 3;
  });
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh rotation-x={-0.5} ref={myMesh}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
}
