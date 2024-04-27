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

/*
function Cube() {
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

*/

/*

function Cube() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const textureUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBMglABe03_aY-m4umgPieAOtHvJS4kqAfg&s'; 

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial map={ new TextureLoader().load(textureUrl)  } color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}
*/









/*

import React, { useEffect, useRef, useState } from 'react';
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
import useSelectFigure from '../../hooks';
import { TextureLoader } from 'three';

import JSZip from 'jszip';


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';


extend({ OrbitControls });



 

async function extractGltfFromZip(zipFile) {
  const zip = new JSZip();
  const zipData = await zip.loadAsync(zipFile);

  console.log("ZIP" +JSON.stringify(zipData))
 // const gltfFile = zipData.files['path/to/your/model.gltf']; // Путь к файлу .gltf внутри архива
 const gltfFile = zipData.files['scene.gltf']
  if (gltfFile) {
    const gltfData = await gltfFile.async('string');
    const gltfUrl = URL.createObjectURL(new Blob([gltfData]));
    return gltfUrl;
  } else {
    throw new Error('GLTF file not found in the zip archive');
  }
}



function Model({ fileUrl }) {
  const gltf = useLoader(GLTFLoader, fileUrl);
  const group = useRef();

  // Перемещение, вращение, масштабирование модели по вашему усмотрению
  // Например:
  // group.current.position.set(x, y, z);
  // group.current.rotation.set(rx, ry, rz);
  // group.current.scale.set(sx, sy, sz);

  return (
    <group ref={group}>
      <primitive object={gltf.scene} />
    </group>
  );
}




function Cube() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const textureUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBMglABe03_aY-m4umgPieAOtHvJS4kqAfg&s';
  let materialProps = { color: isHovered ? 'red' : 'orange' };
  if (textureUrl.trim() !== '') {
    materialProps.map = new TextureLoader().load(textureUrl);
  }

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
}


function Pyramid() {
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
      <coneGeometry args={[2, 4, 4]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}

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
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}
function CameraControls() {


  
  
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}
const RestaurantPreview = () => {
  const { handleSelect, selectedFigure } = useSelectFigure()
  const [fileUrl, setFileUrl] = useState()
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const gltfUrl = await extractGltfFromZip(file);

    console.log("GLTF" +gltfUrl)
setFileUrl(gltfUrl);
  //  setFileUrl(URL.createObjectURL(file));
    console.log("changed")
  };
 
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
              <img src={Search} alt="search" className="left__panel__header__input__img" />
            </div>
          </div>
          <div className="left__panel__elements">
            <div className="left__panel__element">
              <img src={Rect} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => handleSelect("Куб")}  >
                Куб
              </p>
            </div>
            <div className="left__panel__element">
              <img src={Ellipse} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => handleSelect("Шар")} >
                Шар
              </p>
            </div>

            <div className="left__panel__element">
              <img src={Polygon} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => handleSelect("Пирамида")} >
                Пирамида
              </p>
            </div>

            <div className="left__panel__element">
              <img src={Plus} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => document.getElementById('fileInput').click()}>
                Новая фигура
              </p>
              <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(event) => handleFileChange(event)} />
            </div>


          </div>
        </div>
      </div>

      <Canvas style={{ background: 'black' }}>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {selectedFigure == "Куб" ? (
          <Cube />
        ) : (

          <>
          </>
        )}


        {selectedFigure == "Пирамида" ? (
          <Pyramid />
        ) : (
          <>

          </>
        )}
        {selectedFigure == "Шар" ? (
          <Box />

        ) : (
          <>


          </>
        )}


{fileUrl && <Model fileUrl={fileUrl} />}
        <CameraControls />
      </Canvas>

      <Chat />
    </div>
  );
}

export default RestaurantPreview;
 */











import React, { useEffect, useRef, useState } from 'react';
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
import useSelectFigure from '../../hooks';
import { TextureLoader } from 'three';

import JSZip from 'jszip';


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import {Vase} from '../../models/Vase';
import { Bird } from '../../models/Bird';
import { SittingMan } from '../../models/SittingMan';
import { Maus } from '../../models/Maus';
import { Man } from '../../models/Man';


extend({ OrbitControls });



 
 


 


function Cube() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const textureUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBMglABe03_aY-m4umgPieAOtHvJS4kqAfg&s';
  let materialProps = { color: isHovered ? 'red' : 'orange' };
  if (textureUrl.trim() !== '') {
    materialProps.map = new TextureLoader().load(textureUrl);
  }

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
}


function Pyramid() {
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
      <coneGeometry args={[2, 4, 4]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}

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
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={isHovered ? 'red' : 'orange'} />
    </mesh>
  );
}




 
function CameraControls() {


  //npx gltfjsx scene.gltf
  
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
}
const RestaurantPreview = () => {
  const { handleSelect, selectedFigure } = useSelectFigure()
  const [fileUrl, setFileUrl] = useState()
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
 
setFileUrl(file);
  //  setFileUrl(URL.createObjectURL(file));
    console.log("changed")
  };
 
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
              <img src={Search} alt="search" className="left__panel__header__input__img" />
            </div>
          </div>
          <div className="left__panel__elements">
            <div className="left__panel__element">
              <img src={Rect} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => handleSelect("Куб")}  >
                Куб
              </p>
            </div>
            <div className="left__panel__element">
              <img src={Ellipse} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => handleSelect("Шар")} >
                Шар
              </p>
            </div>

            <div className="left__panel__element">
              <img src={Polygon} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => handleSelect("Пирамида")} >
                Пирамида
              </p>
            </div>

            <div className="left__panel__element">
              <img src={Plus} alt="figure" className="left__panel__element__figure" />
              <p className="left__panel__element__text" onClick={() => document.getElementById('fileInput').click()}>
                Новая фигура
              </p>
              <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(event) => handleFileChange(event)} />
            </div>


          </div>
        </div>
      </div>

      <Canvas style={{ background: 'black' }}>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {selectedFigure == "Куб" ? (
          <Cube />
        ) : (

          <>
          </>
        )}


        {selectedFigure == "Пирамида" ? (
          <Pyramid />
        ) : (
          <>

          </>
        )}
        {selectedFigure == "Шар" ? (
          <Box />

        ) : (
          <>


          </>
        )}
{/*
<Bird />
<Vase />
*/}
<Maus />
<SittingMan />
<Man />
        <CameraControls />
      </Canvas>

      <Chat />
    </div>
  );
}

export default RestaurantPreview;

//GLB


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