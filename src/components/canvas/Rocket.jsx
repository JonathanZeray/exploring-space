import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Rocket(props) {
  const { nodes, materials } = useGLTF("/assets/models/withflag.glb");

  const ref = useRef();
  const tl = useRef();
  const rocketRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      rocketRef.current.rotation,
      {
        duration: 9,
        y: -10,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 10,
        y: 2,
      },
      ">"
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group ref={rocketRef} position={[0, -0.8, 0]}>
        <group scale={0.01}>
          <group position={[2.93, 85.27, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_3.geometry}
              material={nodes.Rectangle_3.material}
              position={[1.91, -0.1, -0.87]}
              rotation={[-2.97, 1.54, 1.39]}
              scale={[1, 1, 0.6]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2.geometry}
              material={nodes.Rectangle_2.material}
              position={[1.2, -0.12, 1.78]}
              rotation={[0, 1.04, -1.56]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle.geometry}
              material={nodes.Rectangle.material}
              position={[1.68, 0.03, 0.96]}
              rotation={[0, 1.04, 0]}
              scale={[1, 1.06, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              position={[2.11, -0.18, 0.45]}
              rotation={[Math.PI / 2, -0.01, -1.37]}
              scale={[1.69, 0.5, 1.09]}
            />
          </group>
          <group position={[-0.47, 50.43, 0.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={nodes.Object_4.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={nodes.Object_6.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={nodes.Object_7.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={nodes.Object_8.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={nodes.Object_9.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={nodes.Object_10.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={nodes.Object_11.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={nodes.Object_12.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={nodes.Object_13.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={nodes.Object_14.material}
              position={[0.47, -50.43, -0.43]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={nodes.Object_5.material}
              position={[0.47, -50.43, -0.43]}
            />
          </group>
          <OrthographicCamera
            makeDefault={false}
            far={100000}
            near={0}
            position={[968.85, -26.03, 245.43]}
            rotation={[0.42, 1.3, -0.41]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/withflag.glb");
