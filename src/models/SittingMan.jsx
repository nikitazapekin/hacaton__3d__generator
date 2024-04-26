 
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import sittingScene from "../assets/3d/free_018_kana_sitting.glb"
import { useEffect } from "react";
export function SittingMan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
   sittingScene
  );
  const { actions } = useAnimations(animations, group);

  const { scene } = useGLTF(sittingScene);
 
  return (
    <group ref={group} {...props} dispose={null}
    scale={0.015}
    position={[0, 0, 6]}
    >
           <primitive object={scene} />
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 180]}>
          <group
            name="0d0b4477b5c547c88dea7cea63bc4cfdfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials["018-01"]}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <group name="018_Kana" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/free_018_kana_sitting (1).glb");
