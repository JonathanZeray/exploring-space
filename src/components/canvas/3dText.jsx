
import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

export function LandingPageText(props) {
  const { nodes, materials } = useGLTF("/assets/models/LandingPageText.glb");
  return (
    <group {...props} dispose={null} rotation={[-0.1, 0, 0]}>
      <group scale={0.015}>
        <group
          position={[68.14, -257.95, 1.56]}
          rotation={[Math.PI, -1.55, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.P.geometry}
            material={nodes.P.material}
            position={[0.36, 300.57, 167.47]}
            rotation={[0.27, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.A.geometry}
            material={nodes.A.material}
            position={[-0.71, 311.2, 92.96]}
            rotation={[0.03, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.C.geometry}
            material={nodes.C.material}
            position={[-0.18, 309.95, 0.72]}
            rotation={[-0.25, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.E.geometry}
            material={nodes.E.material}
            position={[-0.49, 292.75, -84.1]}
            rotation={[-0.36, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.S.geometry}
            material={nodes.S.material}
            position={[0.71, 277.23, 236.12]}
            rotation={[0.3, Math.PI / 2, 0]}
          />
        </group>
        <directionalLight
          intensity={0.7}
          decay={2}
          rotation={[-0.63, 0.5, 0.99]}
        />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[0, 0, 1000]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Underline.geometry}
          material={nodes.Underline.material}
          position={[14.63, 61.93, -29.13]}
          rotation={[0, -0.02, 0]}
          scale={[1.04, 0.68, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Exploring.geometry}
          material={nodes.Exploring.material}
          position={[19.8, 90.94, -26.91]}
          rotation={[0, -0.02, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/LandingPageText.glb");