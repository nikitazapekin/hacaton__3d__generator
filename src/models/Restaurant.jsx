

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import restaurantScene from "../assets/3d/restaurant.glb"
import { useEffect } from "react";
import { a } from '@react-spring/three'
//import { Man } from "./Man";
//import Test from "../assets/floor.jpg"
//import { Cube } from "./Cube";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

//import { Bird } from "./Bird";
//import { coordinates } from "../consts/numbersOfTable";
//import { SittingMan } from "./SittingMan";
//import { Board } from "./Board";
//import { SecondBoard } from "./SecondBoard";
 
const Restaurant = (isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props) => {
  const { nodes, materials } = useGLTF(restaurantScene);
  //const texture = useTexture(Test);
  //texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  
 // const {isbookedTable} = useBoard({currentTime})
 //const {currentTime} = useMonitoring()

 // const {isbookedTable} = useBoard({currentTime})
  
  //  console.log("booking tables" +JSON.stringify(isbookedTable))

  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.05;
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.02 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:

      }
    }
  });



  return (
    <a.group ref={islandRef} {...props} dispose={null}
      scale={[1, 1, 1]}
      position={[3, -3, 1]}
    >
  
   {/*}   {coordinates.map((item, index) => (
        <Cube number={item.number} x={item.x} y={item.y} z={item.z} 
        isBooked={isbookedTable[Object.keys(isbookedTable)[index]] ? true : false}
        />
      ))} 
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <boxGeometry args={[500, 500, 500]} />  
        <meshStandardMaterial color="gray"// map={texture} 
        
        map-repeat={[100, 100]} />
      </mesh>
      <mesh receiveShadow position={[0, -0.3, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="gray" //map={texture} 
        map-repeat={[100, 100]} />
      </mesh>
      */}

      <group
      >
        <group

          position={[12.588, 1.204, 9.627]}

          scale={[1, 1, 1.36]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������_Material_#29_0"].geometry}
            material={materials.Material_29}
            position={[0, -0.276, -0.886]}
            scale={[1, 0.597, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#29_0"].geometry}
            material={materials.Material_29}
            position={[0.886, -0.195, 0.082]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.597, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������_Material_#29_0_1"].geometry}
            material={materials.Material_29}
            position={[0, 0.27, -0.886]}
            scale={[1, 0.597, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������_Material_#29_0_2"].geometry}
            material={materials.Material_29}
            position={[0, -0.006, -0.886]}
            scale={[1, 0.597, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������_Material_#29_0_3"].geometry}
            material={materials.Material_29}
            position={[0, -0.006, -0.492]}
            scale={[1, 0.597, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������_Material_#29_0_4"].geometry}
            material={materials.Material_29}
            position={[0, -0.144, -0.492]}
            scale={[1, 0.597, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#29_0_1"].geometry}
            material={materials.Material_29}
            position={[-1.004, -0.195, 0.082]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.597, 1, 1]}
          />
        </group>
        <group
          position={[7.401, 0.721, 8.86]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[0, -1.215, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������001_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������001_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������001_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������001_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������001_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������001_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.009, 0, 0.463]}
            />
          </group>
          <group position={[0, 1.215, 0]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������002_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������002_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������002_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
        </group>
        <group
          position={[7.401, 0.721, 2.56]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[0, 1.215, 0]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������008_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������008_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������008_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, -1.215, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������007_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������007_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������007_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������002_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������002_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������002_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.009, 0, 0.463]}
            />
          </group>
        </group>
        <group
          position={[7.401, 0.721, 5.71]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[-0.689, -0.889, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������003_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������003_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������003_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0.689, 0.889, 0]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������006_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������006_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������006_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>

          <group position={[0.689, -0.889, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������004_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������004_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������004_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[-0.689, 0.889, 0]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������005_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������005_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������005_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������001_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-1.223, 0, -0.234]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������001_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[1.184, 0, -0.234]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������001_Material_#33_0_1"].geometry}
              material={materials.Material_33}
              position={[0, 0, 0.463]}
            />
          </group>
        </group>
        <group
          position={[-1.458, 0.721, -7.184]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[-1.215, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������010_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������010_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������010_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[1.215, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������009_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������009_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������009_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������003_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������003_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������003_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.009, 0, 0.463]}
            />
          </group>
        </group>
        <group
          position={[-4.017, 0.721, -7.184]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[-1.215, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������012_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������012_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������012_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[1.215, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������011_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������011_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������011_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������004_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������004_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������004_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.009, 0, 0.463]}
            />
          </group>
        </group>
        <group
          position={[-6.576, 0.721, -7.184]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[-1.215, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������014_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������014_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������014_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[1.215, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������013_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������013_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������013_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������005_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������005_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.02, 0, -0.235]}
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������005_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.009, 0, 0.463]}
            />
          </group>
        </group>
        <group
          position={[-5.985, 0.721, -0.314]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[-0.889, -0.689, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������015_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������018_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������016_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0.889, -0.689, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������016_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������017_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������018_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������002_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-1.223, 0, -0.234]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������002_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[1.184, 0, -0.234]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������002_Material_#33_0_1"].geometry}
              material={materials.Material_33}
              position={[0, 0, 0.463]}
            />
          </group>
          <group position={[0.889, 0.689, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������017_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������017_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������018_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[-0.889, 0.689, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������015_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������016_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������015_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
        </group>
        <group
          position={[-2.048, 0.721, -0.314]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <group position={[-0.889, 0.689, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������019_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������020_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������019_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0.889, 0.689, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������021_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������021_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������022_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[-0.889, -0.689, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������019_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������022_Material_#31_0"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������020_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0.889, -0.689, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������020_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[0.256, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������021_Material_#33_0"].geometry}
              material={materials.Material_33}
              position={[-0.335, 0.05, 0.511]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������022_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-0.295, 0.05, -0.232]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>
          <group position={[0, 0, -0.199]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������2������003_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[-1.223, 0, -0.234]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������1������003_Material_#31_0_1"].geometry}
              material={materials.Material_31}
              position={[1.184, 0, -0.234]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["���������������003_Material_#33_0_1"].geometry}
              material={materials.Material_33}
              position={[0, 0, 0.463]}
            />
          </group>
        </group>
        <group
          position={[-4.017, 0.63, 7.088]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#28_0_1"].geometry}
            material={materials.Material_28}
            position={[-1.9, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������008_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[1.9, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������006_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-0.633, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������007_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[0.633, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005_Material_#28_0_1"].geometry}
            material={materials.Material_28}
            position={[-1.9, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#28_0_1"].geometry}
            material={materials.Material_28}
            position={[0.633, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#28_0_1"].geometry}
            material={materials.Material_28}
            position={[-0.633, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004_Material_#28_0_1"].geometry}
            material={materials.Material_28}
            position={[1.9, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������008_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[1.9, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[1.9, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#39_0"].geometry}
            material={materials.Material_39}
            position={[0.633, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������007_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0.633, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������006_Material_#37_0"].geometry}
            material={materials.Material_37}
            position={[-0.633, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[-0.633, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[-1.9, 0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[-1.9, -0.633, -0.63]}
            scale={[0.804, 0.804, 1]}
          />
        </group>
        <group
          position={[2.086, -0.039, -0.196]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#28_0_2"].geometry}
            material={materials.Material_28}
            position={[5.906, 3.937, -0.039]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#26_0"].geometry}
            material={materials.Material_26}
            position={[-0.984, 5.315, 0.039]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#26_0"].geometry}
            material={materials.Material_26}
            position={[-6.89, 3.937, -0.039]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004_Material_#28_0_2"].geometry}
            material={materials.Material_28}
            position={[-3.543, -6.89, -0.039]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005_Material_#26_0"].geometry}
            material={materials.Material_26}
            position={[7.283, -6.89, -0.039]}
          />
        </group>
        <group
          position={[0.609, 2.874, -0.294]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#27_0"].geometry}
            material={materials.Material_27}
            position={[0.098, -10.827, -2.953]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#27_0"].geometry}
            material={materials.Material_27}
            position={[-10.827, 0, -2.953]}
          />
        </group>
        <group
          position={[2.184, 2.913, 7.088]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#33_0_1"].geometry}
            material={materials.Material_33}
            position={[0, 0, -2.913]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#33_0_2"].geometry}
            material={materials.Material_33}
            position={[-3.445, 0, -0.748]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#33_0_3"].geometry}
            material={materials.Material_33}
            position={[3.445, 0, -0.748]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#33_0_4"].geometry}
            material={materials.Material_33}
            position={[0, 0, 2.717]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#32_0"].geometry}
            material={materials.Material_32}
            position={[0.279, 0.02, 1.082]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[-9.824, 3.543, 7.088]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#33_0_1"].geometry}
            material={materials.Material_33}
            position={[-2.362, 0, -0.787]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#33_0_1"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.787]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#33_0_1"].geometry}
            material={materials.Material_33}
            position={[2.362, 0, -0.787]}
          />
        </group>
        <group
          position={[6.023, 3.543, -10.727]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004_Material_#33_0_1"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.787]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005_Material_#33_0_1"].geometry}
            material={materials.Material_33}
            position={[-2.362, 0, -0.787]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������006_Material_#33_0_1"].geometry}
            material={materials.Material_33}
            position={[2.362, 0, -0.787]}
          />
        </group>
        <group
          position={[2.824, 0.964, 7.442]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������_Material_#30_0"].geometry}
            material={materials.Material_30}
            position={[-0.984, 0.01, 0.387]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[1, 0.739, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_Material_#33_0"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.964]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, -0.512, -0.374]}
            scale={[1, 1, 0.739]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#31_0_1"].geometry}
            material={materials.Material_31}
            position={[0.984, 0.01, 0.387]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[1, 0.739, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#31_0_2"].geometry}
            material={materials.Material_31}
            position={[-1.102, 0.01, 0.387]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[1, 0.739, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#33_0_5"].geometry}
            material={materials.Material_33}
            position={[0, -0.089, 0.217]}
          />
        </group>
        <group
          position={[-9.725, 2.913, -1.321]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#33_0_6"].geometry}
            material={materials.Material_33}
            position={[-0.026, 0.394, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���003_Material_#30_0"].geometry}
            material={materials.Material_30}
            position={[0, 0.059, -1.24]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���002_Material_#30_0"].geometry}
            material={materials.Material_30}
            position={[0, 0.059, 1.122]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���001_Material_#30_0"].geometry}
            material={materials.Material_30}
            position={[0, 0.059, -0.059]}
          />
        </group>
        <group
          position={[1.298, 1.457, 4.332]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������001_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#31_0_4"].geometry}
            material={materials.Material_31}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[1.692, 1.457, 9.647]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������001_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#31_0_5"].geometry}
            material={materials.Material_31}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[1.298, 1.457, 4.923]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#31_0_2"].geometry}
            material={materials.Material_31}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������002_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[1.298, 1.457, 5.513]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#31_0_2"].geometry}
            material={materials.Material_31}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������003_Material_#39_0"].geometry}
            material={materials.Material_39}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[1.692, 1.457, 10.237]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#31_0_3"].geometry}
            material={materials.Material_31}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������002_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[-9.135, 1.457, 9.647]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������004_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[-9.135, 1.457, 9.253]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������005_Material_#37_0"].geometry}
            material={materials.Material_37}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[-9.135, 1.457, 8.86]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������006__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������006_Material_#39_0"].geometry}
            material={materials.Material_39}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[-9.529, 1.457, 9.647]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������007__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������007_Material_#37_0"].geometry}
            material={materials.Material_37}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[-9.529, 1.457, 9.253]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������008__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������008_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[-9.529, 1.457, 8.86]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������009__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������009_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[8.975, 1.457, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������007_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���007_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[7.991, 1.457, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������006_Material_#39_0"].geometry}
            material={materials.Material_39}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���006_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[7.007, 1.457, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���005_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������005_Material_#37_0"].geometry}
            material={materials.Material_37}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[6.023, 1.457, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���004_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������004_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[5.038, 1.457, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���003_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������003_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[4.054, 1.457, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���002_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������002_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[3.07, 1.457, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������001_Material_#39_0"].geometry}
            material={materials.Material_39}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���001_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[6.023, 1.457, -4.133]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������008_Material_#39_0"].geometry}
            material={materials.Material_39}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���008_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[6.023, 1.457, -5.314]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������009_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���009_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[6.023, 1.457, -6.495]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������010_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���010_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[-9.332, 1.457, 4.726]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������011_Material_#39_0"].geometry}
            material={materials.Material_39}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���011__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[-9.332, 1.457, 5.907]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������012_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���012__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[-9.332, 1.457, 7.088]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������013_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���013__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[1.298, 1.457, 6.694]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������014_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���014_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[1.298, 1.457, 7.875]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������015_Material_#37_0"].geometry}
            material={materials.Material_37}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���015_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[0, 0, 0.197]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
        </group>
        <group
          position={[1.298, 1.782, -6.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.65, 1.5, 1.6]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#30_0_1"].geometry}
            material={materials.Material_30}
            position={[0, 0, 0.051]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#33_0_2"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.326]}
            scale={[1, 1, 0.798]}
          />
        </group>
        <group
          position={[1.298, 1.782, -6.692]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.65, 1.5, 1.6]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#30_0_1"].geometry}
            material={materials.Material_30}
            position={[0, 0, 0.051]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������023_Material_#33_0"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.326]}
            scale={[1, 1, 0.798]}
          />
        </group>
        <group
          position={[1.298, 1.782, -7.282]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.65, 1.5, 1.6]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#30_0_1"].geometry}
            material={materials.Material_30}
            position={[0, 0, 0.051]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������024_Material_#33_0"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.326]}
            scale={[1, 1, 0.798]}
          />
        </group>
        <group
          position={[1.298, 1.457, -9.251]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������010__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������010_Material_#37_0"].geometry}
            material={materials.Material_37}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[1.298, 1.457, -8.66]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������011__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������011_Material_#38_0"].geometry}
            material={materials.Material_38}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[1.298, 1.457, -8.07]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������012__0"].geometry}
            material={materials["004__0"]}
            position={[0, 0, -0.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������������������012_Material_#36_0"].geometry}
            material={materials.Material_36}
            position={[0, 0, -0.197]}
          />
        </group>
        <group
          position={[-9.332, 1.782, -6.692]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.65, 1.5, 1.6]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004_Material_#30_0_1"].geometry}
            material={materials.Material_30}
            position={[0, 0, 0.051]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������025_Material_#33_0"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.326]}
            scale={[1, 1, 0.798]}
          />
        </group>
        <group
          position={[-9.332, 1.782, -6.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.65, 1.5, 1.6]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005_Material_#30_0_1"].geometry}
            material={materials.Material_30}
            position={[0, 0, 0.051]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������026_Material_#33_0"].geometry}
            material={materials.Material_33}
            position={[0, 0, -0.326]}
            scale={[1, 1, 0.798]}
          />
        </group>
        <group
          position={[2.735, 1.366, 8.072]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
        </group>
        <group
          position={[2.735, 1.366, 7.875]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[2.735, 0.657, 7.088]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#39_0_1"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[2.735, 0.657, 6.891]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������004_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[2.735, 0.657, 6.694]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������005_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[10.907, 1.327, -4.689]}
          rotation={[-Math.PI / 2, 0, -1.833]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������006_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������006_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[10.717, 1.327, -4.74]}
          rotation={[-Math.PI / 2, 0, -1.833]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������007_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������007_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[10.526, 1.327, -4.791]}
          rotation={[-Math.PI / 2, 0, -1.833]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������008_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������008_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[10.968, 1.327, -4.917]}
          rotation={[-Math.PI / 2, 0, -1.833]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������009_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������009_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[10.778, 1.327, -4.968]}
          rotation={[-Math.PI / 2, 0, -1.833]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������010_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������010_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group
          position={[10.588, 1.327, -5.019]}
          rotation={[-Math.PI / 2, 0, -1.833]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������011_Material_#39_0"].geometry}
            material={materials.Material_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������011_Material_#35_0"].geometry}
            material={materials.Material_35}
            position={[0, 0, -0.067]}
          />
        </group>
        <group position={[0.14, 4.238, -10.936]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#33_0_8"].geometry}
            material={materials.Material_33}
            position={[0.004, 0.008, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#32_0_1"].geometry}
            material={materials.Material_32}
            position={[0, 0.008, -0.157]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_Material_#32_0_2"].geometry}
            material={materials.Material_32}
            position={[-0.082, 0.008, 0.082]}
            rotation={[Math.PI / 2, 0, Math.PI / 4]}
          />
        </group>
        <group position={[2.699, 0.784, 10.237]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#42_0"].geometry}
            material={materials.Material_42}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������001_Material_#43_0"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������001_Material_#43_0_1"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#41_0"].geometry}
            material={materials.Material_41}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������001_Material_#43_0_2"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������001_Material_#40_0"].geometry}
            material={materials.Material_40}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
        </group>
        <group position={[2.699, 0.784, 9.056]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#40_0"].geometry}
            material={materials.Material_40}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#42_0"].geometry}
            material={materials.Material_42}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������002_Material_#43_0"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������002_Material_#43_0_1"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������002_Material_#41_0"].geometry}
            material={materials.Material_41}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������002_Material_#43_0_2"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
        </group>
        <group position={[2.423, 1.32, 10.041]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#40_0"].geometry}
            material={materials.Material_40}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#42_0"].geometry}
            material={materials.Material_42}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������003_Material_#43_0"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������003_Material_#43_0_1"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������003_Material_#41_0"].geometry}
            material={materials.Material_41}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������������003_Material_#43_0_2"].geometry}
            material={materials.Material_43}
            position={[0.043, 0, -0.242]}
            rotation={[0, -0.175, -Math.PI / 2]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������001_Material_#28_0"].geometry}
          material={materials.Material_28}
          position={[10.747, 0, -7.184]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������002_Material_#28_0"].geometry}
          material={materials.Material_28}
          position={[6.023, 0, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������004_Material_#28_0"].geometry}
          material={materials.Material_28}
          position={[-9.332, 0, -7.479]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������������_Material_#29_0"].geometry}
          material={materials.Material_29}
          position={[-9.332, 0, -10.235]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_#33_0"].geometry}
          material={materials.Material_33}
          position={[12.912, 0, -1.18]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_Material_#28_0"].geometry}
          material={materials.Material_28}
          position={[6.023, 0.079, -5.314]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������003_Material_#28_0"].geometry}
          material={materials.Material_28}
          position={[1.298, 0, -7.184]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������005_Material_#28_0"].geometry}
          material={materials.Material_28}
          position={[-9.332, 0, 7.088]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������006_Material_#28_0_1"].geometry}
          material={materials.Material_28}
          position={[1.298, 0, 7.088]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_#31_0_3"].geometry}
          material={materials.Material_31}
          position={[14.389, -0.079, -1.18]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������001_Material_#32_0"].geometry}
          material={materials.Material_32}
          position={[6.968, 1.096, 2.516]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������001_Material_#31_0_2"].geometry}
          material={materials.Material_31}
          position={[7.083, 1.09, 2.792]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.164, 0.175, 0.194]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������001_Material_#31_0_3"].geometry}
          material={materials.Material_31}
          position={[6.934, 1.09, 2.254]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������001_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[1.298, 1.611, -3.812]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������002_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[1.692, 1.611, -3.812]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������003_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[0.905, 1.611, -3.812]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������004_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[0.905, 1.611, -4.206]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������005_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[1.298, 1.611, -4.206]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������006_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[1.692, 1.611, -4.206]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������007_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[-9.529, 2.342, -10.117]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������008_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[-9.529, 2.342, -10.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������010_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[-9.135, 2.342, -10.353]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������009_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[-9.135, 2.342, -10.117]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_#33_0_7"].geometry}
          material={materials.Material_33}
          position={[10.747, 1.26, -4.854]}
          rotation={[-Math.PI / 2, 0, -1.833]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������011_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[5.308, 0.706, -6.815]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������012_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[5.308, 0.706, -6.619]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������013_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[5.308, 0.706, -6.422]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������014_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[6.737, 0.706, -3.812]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������015_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[6.737, 0.706, -4.009]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������016_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[6.737, 0.706, -6.371]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������017_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[6.737, 0.706, -6.568]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������018_Material_#30_0"].geometry}
          material={materials.Material_30}
          position={[6.737, 0.706, -6.765]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.194}
        />
      </group>
    </a.group>
  );
}

useGLTF.preload("/restaurant.glb");
export default Restaurant