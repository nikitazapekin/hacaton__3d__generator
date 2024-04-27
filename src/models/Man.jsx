/*
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ManScene from "../assets/3d/business_man_standing.glb"
export function Man(props) {
  const { nodes, materials } = useGLTF(ManScene);
  const { scene, animations } = useGLTF(ManScene);
  return (
    <group {...props} dispose={null}
    >
      <mesh
        rotation={[0, 40, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_M_455555566666666_Material__2_0.geometry}
        material={materials.M_455555566666666_Material__2}
      //  scale={0.01}
      position={[8,0,-6]}
      scale={1.5}
      />

<primitive object={scene} />
    </group>
  );
}
useGLTF.preload("/business_man_standing.glb");

*/

/*

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ManScene from "../assets/3d/business_man_standing.glb";

export function Man(props) {
  const { nodes, materials } = useGLTF(ManScene);

  // Перекрашиваем материал модели в красный цвет
  const redColor = new THREE.Color(0xff0000); // Красный цвет
  materials.M_455555566666666_Material__2.color = redColor;

  return (
    <group {...props} dispose={null}>
      <mesh
        rotation={[0, 40, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_M_455555566666666_Material__2_0.geometry}
        material={materials.M_455555566666666_Material__2}
        position={[8,0,-6]}
        scale={1.5}
      />
      <primitive object={nodes} />
    </group>
  );
}

useGLTF.preload("/business_man_standing.glb");

*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three"; // Импортируем Color из библиотеки Three.js
import ManScene from "../assets/3d/business_man_standing.glb";

export function Man(props) {
  const { nodes, materials } = useGLTF(ManScene);

  // Перекрашиваем материал модели в красный цвет
  const redColor = new Color(0xff0000); // Красный цвет
  materials.M_455555566666666_Material__2.color = redColor;

  return (
    <group {...props} dispose={null}>
      <mesh
        rotation={[0, 0, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Mesh1_M_455555566666666_Material__2_0.geometry}
        material={materials.M_455555566666666_Material__2}
      //  position={[8,0,-6]}
      position={[0,0,0]}
        scale={1.5}
      />
      <primitive object={nodes} />
    </group>
  );
}

useGLTF.preload("/business_man_standing.glb");
