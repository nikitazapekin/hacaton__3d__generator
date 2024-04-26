
import React, { useRef } from "react";
import * as THREE from "three";
import useMonitoring from "../subscribtions/monitoring";
import useBoard from "../hooks/useBoard";
export function Cube({number, x,y,z, isBooked}) {
  const cubeRef = useRef();
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    context.fillStyle = isBooked ? "orange" : "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "Bold 120px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white"; 
    context.fillText(text, centerX, centerY);
    
    return new THREE.CanvasTexture(canvas);
  };
  const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
      const textures = [number, number, number, number, number, number].map(createTexture);
      const geometry = new THREE.BoxGeometry();
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  return <primitive ref={cubeRef} object={cube} />;
 
} 






/*
import React, { useRef } from "react";
import * as THREE from "three";

export function Cube({ number, x, y, z, isBooked }) {
  const cubeRef = useRef();

  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    context.font = "Bold 120px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.fillText(text, centerX, centerY);
    
    return new THREE.CanvasTexture(canvas);
  };

  const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
  const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Красный цвет

  // Создаем текстуру только для надписи
  const textTexture = createTexture(number);

  // Создаем красный материал для сторон куба
  const cubeMaterial = new THREE.MeshBasicMaterial({ map: textTexture });

  const geometry = new THREE.BoxGeometry();
  
  const materials = [ cubeMaterial,  cubeMaterial,  cubeMaterial,  cubeMaterial, cubeMaterial,  cubeMaterial];

  const cube = new THREE.Mesh(geometry, materials);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;

  return <primitive ref={cubeRef} object={cube} />;
}
 */

/*
import React, { useRef } from "react";
import * as THREE from "three";

export function Cube({ number, x, y, z, isBooked }) {
  const cubeRef = useRef();

  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    context.font = "Bold 120px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.fillText(text, centerX, centerY);
    
    return new THREE.CanvasTexture(canvas);
  };

  const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
  const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Красный цвет

  // Создаем текстуру только для надписи
  const textTexture = createTexture(number);

  // Создаем красный материал для сторон куба
  const cubeMaterial = new THREE.MeshBasicMaterial({ map: textTexture });

  const geometry = new THREE.BoxGeometry();
  
  const materials = [
    cubeMaterial, // Передняя грань
    pinkMaterial, // Задняя грань
    pinkMaterial, // Верхняя грань
    pinkMaterial, // Нижняя грань
    pinkMaterial, // Левая грань
    pinkMaterial, // Правая грань
  ];

  const cube = new THREE.Mesh(geometry, materials);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;

  return <primitive ref={cubeRef} object={cube} />;
}
 */


/*
import React, { useRef } from "react";
import * as THREE from "three";

export function Cube({ number, x, y, z, isBooked }) {
  const cubeRef = useRef();

  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    
    context.font = "Bold 120px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    
    return new THREE.CanvasTexture(canvas);
  };

  const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xff69b4 });

  // Создаем текстуры для всех сторон куба
  const textures = Array.from({ length: 6 }, (_, index) => createTexture(number));

  // Создаем материалы для каждой стороны куба
  const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));

  const geometry = new THREE.BoxGeometry();
  
  const cube = new THREE.Mesh(geometry,pinkMaterial);
  cube.position.set(x, y, z);

  return <primitive ref={cubeRef} object={cube} />;
}
 */

/*
import React, { useRef } from "react";
import * as THREE from "three";

export function Cube({ number, x, y, z, isBooked }) {
  const cubeRef = useRef();

  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    
    context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.font = "Bold 120px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "black"; 
  //context.fillText(text, canvas.width / 2, canvas.height / 2);
   // context.backgroundColor = "white";

  //  context.fillStyle = "black";
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    
    return new THREE.CanvasTexture(canvas);
  };

  const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xff69b4 });


  const textures = Array.from({ length: 6 }, (_, index) => {
    if (index === 4) { 
      return createTexture("Top Text");
    } else {
      return createTexture(number);
    }
  });


  const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));

  const geometry = new THREE.BoxGeometry();
  
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.set(x, y, z);

  return <primitive ref={cubeRef} object={cube} />;
}
 */