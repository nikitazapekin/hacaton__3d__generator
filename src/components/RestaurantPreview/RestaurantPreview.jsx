/*
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Sky } from "../../models";
import Restaurant from "../../models/Restaurant";
import { memo } from "react";
const RestaurantPreview = memo(() => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
 
  const [rotationAngle, setRotationAngle] = useState([0, 0, 0]);
  const rotationSpeed = isRotating ? 0.0000000000001 : 0; 
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;


    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }; 

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
    screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43.4];
    } else {
     screenScale = [1, 1, 1];
      screenPosition = [0, -10, -43.4];
    }

    return [screenScale, screenPosition];
  };


  const handleMouseDown = (e) => {
    setIsRotating(true);
  };

  const handleMouseUp = () => {
    setIsRotating(false);
  };

  const handleMouseMove = (e) => {

    if (isRotating) {
      const { movementX, movementY } = e;
      console.log( movementX, movementY )
      setRotationAngle([
        rotationAngle[0] + movementY * 0.001 ,
        rotationAngle[1] + movementX * 0.001+0.7 ,
        0
      ]);
    }
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
     document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isRotating]); 
const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <>
      <section className="w-full h-screen relative">
        <Canvas
              onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
          style={{ width: "100wv", height: "100vh" }}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={"loading"}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Sky
            isRotating={rotationSpeed !== 0} rotationSpeed={0.0001} 
            />
            
            <Restaurant
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              position={islandPosition}
              rotation={[0.1, 4.7077, 0]}
              scale={islandScale}

  /> 
          </Suspense>
        </Canvas>

      </section>
    </>
  );
});

export default RestaurantPreview; */






/*
import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

function Box() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function CameraControls() {
  const cameraRef = useRef();
  useFrame(({ camera }) => {
    cameraRef.current.position.x = Math.sin(Date.now() * 0.001) * 3;
    cameraRef.current.position.z = Math.cos(Date.now() * 0.001) * 3;
    cameraRef.current.lookAt(0, 0, 0);
  });

  return <perspectiveCamera ref={cameraRef} />;
}






const RestaurantPreview = () => {
    return ( 

     
              <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box />
                <CameraControls />
              </Canvas>
     
     );
}
 
export default RestaurantPreview;

*/

/*
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Box() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}

function CameraControls() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

const RestaurantPreview = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <CameraControls />
    </Canvas>
  );
}

export default RestaurantPreview;


*/


/*
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Box() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}

function CameraControls() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

const RestaurantPreview = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <CameraControls />
    </Canvas>
  );
}

export default RestaurantPreview;

*/



/*
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Box() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    //  position={[5, 5, 5]}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} //position={[10, 0, 0]} 
      />
    </mesh>
  );
}

function CameraControls() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

const RestaurantPreview = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <CameraControls />
    </Canvas>
  );
}

export default RestaurantPreview;

*/


/*

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Box() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      position={[0, 0, 0]} // Центрируем куб по вертикали
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}

function CameraControls() {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}

const RestaurantPreview = () => {
  return (
    <Canvas style={{ background: 'black' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <CameraControls />
    </Canvas>
  );
}

export default RestaurantPreview;

 
*/




import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import "./index.scss"

import Search from "../../assets/images/Group 1.png"
import "./index.css"
import Rect from "../../assets/images/Rectangle 4.png"
import Ellipse from "../../assets/images/Ellipse 2.png"
import Polygon from "../../assets/images/Polygon 1.png"
import Plus from "../../assets/images/+.png"
import Chat from '../Chat';
extend({ OrbitControls });

function Box() {
    const meshRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    useFrame(() => {
        if (!isHovered) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            position={[0, 0, 0]}
        >
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
        </mesh>
    );
}

function CameraControls() {
    const { camera, gl } = useThree();
    return <orbitControls args={[camera, gl.domElement]} />;
}

const RestaurantPreview = () => {
    return (
        <div style={{ height: '100vh', width: "100%" }}>

        <div className="left__panel">
            <div className="left__panel__content">
                <div className="left__panel__header">
                    <h1 className="left__panel__header__title">
                        Chat
                    </h1>
                    <div className="left__panel__header__input__wrapper">
                    <input type="search" className="left__panel__header__input" placeholder="Найти" />
                    <img src={Search} alt="search" className="left__panel__header__input__img"/>
                    </div>
                </div>



                <div className="left__panel__elements">
                    <div className="left__panel__element">
                        <img src={Rect} alt="figure" className="left__panel__element__figure" />
                        <p className="left__panel__element__text">
                            Куб
                        </p>
                    </div>


                    <div className="left__panel__element">
                        <img src={Ellipse} alt="figure" className="left__panel__element__figure" />
                        <p className="left__panel__element__text">
                          Шар
                        </p>
                    </div>



                    <div className="left__panel__element">
                        <img src={Polygon} alt="figure" className="left__panel__element__figure" />
                        <p className="left__panel__element__text">
                           Пирамида 
                        </p>
                    </div>



                    <div className="left__panel__element">
                        <img src={Plus} alt="figure" className="left__panel__element__figure" />
                        <p className="left__panel__element__text">
                         Новая фигура
                        </p>
                    </div>

                </div>
            </div>
        </div>
   
            <Canvas style={{ background: 'black' }}>
     
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box />
                <CameraControls />
            </Canvas>

            <Chat />
        </div>
    );
}

export default RestaurantPreview;






//https://gltf.pmnd.rs/










/*
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Music from "../../assets/sakura.mp3";
import { Sky } from "../../models";
import Restaurant from "../../models/Restaurant";
import React, { useRef, useState, useEffect } from "react";

const RestaurantPreview = () => {
  const audioRef = useRef(new Audio(Music));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const rotationSpeed = isRotating ? 0.0000000000001 : 0; // Adjust rotation speed here

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const toggleSound = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -10, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <>
      <section className="w-full h-screen relative">
        <Canvas
          style={{ width: "100wv", height: "100vh" }}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={"loading"}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Sky isRotating={rotationSpeed !== 0} rotationSpeed={0.0001} />

         <OrbitControls />  
            <Restaurant
              isRotating={rotationSpeed !== 0}
              rotationSpeed={0.0001}
              position={islandPosition}
              rotation={[0.1, 4.7077, 0]}
              scale={islandScale}
            />
          </Suspense>
        </Canvas>
        <button onClick={toggleSound}>Sound</button>
        <button onClick={toggleRotation}>
          {isRotating ? "Stop Rotation" : "Start Rotation"}
        </button>
      </section>
    </>
  );
};
export default RestaurantPreview;

*/