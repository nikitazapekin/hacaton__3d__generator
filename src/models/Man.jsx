
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
