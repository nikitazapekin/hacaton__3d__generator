


/*
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import MausScene from "../assets/3d/maus_tank.glb"
import { MeshBasicMaterial } from "three";  
import {  useTexture } from "@react-three/drei";
import { useState, useMemo, useEffect } from 'react';
export function Mauss(props) {
const {outlook} = props

  const { nodes, materials } = useGLTF(MausScene)




  const texture = useTexture(outlook.texture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEOajyiyvLQuaogfSh4C1_1tZDXEE83OMfg&s");




  const newMaterial = useRef();

  useEffect(() => {
    if (!newMaterial.current) {
      newMaterial.current = new MeshBasicMaterial({ map: texture });
    } else {
      newMaterial.current.map = texture;
    }
  }, [texture]);

  const materialKey = useMemo(() => {
    return outlook.texture ? `${outlook.texture}_${texture.uuid}` : null;
  }, [outlook.texture, texture.uuid]);

  if (materialKey) {
    materials.M_455555566666666_Material__2 = newMaterial.current;
  }

  return (
    <group {...props} dispose={null}>
      <group scale={10}
 
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.ritai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.ritai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.ritai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.ritai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.ritai}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_45.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_57.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_63.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_65.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_75.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_77.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_79.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_81.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_83.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_85.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_87.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_89.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_95.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_115.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_117.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_119.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_121.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_123.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_125.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_127.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_129.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_131.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_133.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_135.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_137.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_139.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_141.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_143.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_145.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_147.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_149.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_151.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_153.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_155.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_157.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_159.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_161.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_163.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_165.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_167.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_169.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_171.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_173.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_175.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_177.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_179.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_181.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_183.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_185.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_187.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_189.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_191.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_193.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_195.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_197.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_199.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_201.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_203.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_205.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_207.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_209.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_211.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_213.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_215.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_217.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_219.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_221.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_223.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_225.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_227.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_229.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_231.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_233.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_235.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_237.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_239.geometry}
            material={materials.ashimawari}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.ashimawari}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.ashimawari}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_241.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('../assets/3d/maus_tank.glb')


*/








import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshBasicMaterial } from 'three';
import { useTexture } from '@react-three/drei';
import MausScene from "../assets/3d/maus_tank.glb"
export function Mauss({ outlook }) {
  const { nodes, materials } = useGLTF(MausScene);
  const texture = useTexture(outlook.texture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEOajyiyvLQuaogfSh4C1_1tZDXEE83OMfg&s');
  const newMaterial = useRef();

  useEffect(() => {
    if (!newMaterial.current) {
      newMaterial.current = new MeshBasicMaterial({ map: texture });
    } else {
      newMaterial.current.map = texture;
    }
  }, [texture]);

  const materialKey = useMemo(() => {
    return outlook.texture ? `${outlook.texture}_${texture.uuid}` : null;
  }, [outlook.texture, texture.uuid]);

  if (materialKey) {
    materials.ritai = newMaterial.current;
    materials.houtou = newMaterial.current;
    materials.material = newMaterial.current;
    materials.ashimawari = newMaterial.current;
    materials.body1 = newMaterial.current;
  }

  return (
    <group dispose={null}>
      <group scale={10}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.ritai}
          />
      



































































      <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.ritai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.ritai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.ritai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.ritai}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.houtou}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_45.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_57.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_63.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_65.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_75.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_77.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_79.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_81.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_83.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_85.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_87.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_89.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_95.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_115.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_117.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_119.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_121.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_123.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_125.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_127.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_129.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_131.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_133.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_135.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_137.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_139.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_141.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_143.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_145.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_147.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_149.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_151.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_153.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_155.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_157.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_159.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_161.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_163.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_165.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_167.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_169.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_171.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_173.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_175.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_177.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_179.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_181.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_183.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_185.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_187.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_189.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_191.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_193.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_195.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_197.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_199.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_201.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_203.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_205.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_207.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_209.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_211.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_213.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_215.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_217.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_219.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_221.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_223.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_225.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_227.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_229.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_231.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_233.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_235.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_237.geometry}
            material={materials.ashimawari}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_239.geometry}
            material={materials.ashimawari}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.ashimawari}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.ashimawari}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_241.geometry}
          material={materials.body1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />



     
      </group>
    </group>
  );
}

export default Mauss;
