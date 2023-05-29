import React, { useRef } from "react";
import { useGLTF } from "drei/useGLTF";

export function Planet(props) {
  const { nodes, materials } = useGLTF("/assets/models/planet.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <directionalLight
          intensity={1}
          decay={2}
          rotation={[0.27, 0.1, -1.23]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[-4, 16, 0]}
          rotation={[Math.PI, -1.1, Math.PI]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/planet.glb");
