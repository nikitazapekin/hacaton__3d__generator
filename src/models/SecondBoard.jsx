
import React, { useRef, useState } from "react";
import * as THREE from "three";
import useMonitoring from "../subscribtions/monitoring";
import { useEffect } from "react";
import useTables from "../hooks/useTables";
import useBoard from "../hooks/useBoard";
export function SecondBoard() {
  const boardRef = useRef();

  const {currentTime} = useMonitoring()
  const {isbookedTable} = useBoard(currentTime)
  const createTexture = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;
    
    context.font = "Bold 30px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    
    const restaurantText = "Restaurant Zorka";
    const tablesText = "Tables";
    
    context.fillText(restaurantText, canvas.width / 2, 70);
    context.fillText(tablesText, canvas.width / 2, 120);


const fifthRest = isbookedTable.fifth.length!=0 ? "№5 booked for "+ isbookedTable.fifth :  `№5: 2/2`
context.fillText(fifthRest, (canvas.width / 2) -100, 190);
const sixRest = isbookedTable.six.length!=0 ? "№6 booked for "+ isbookedTable.six :  `№6:  2/2`
context.fillText(sixRest, (canvas.width / 2) -100, 260);
const seventhRest = isbookedTable.seventh.length!=0 ? "№7 booked for "+ isbookedTable.seventh :  `№7:  2/2`
context.fillText(seventhRest, (canvas.width / 2) -100, 330);
const  eightRest = isbookedTable.eight.length!=0 ? "№8 booked for "+ isbookedTable.eight :  `№8:  2/2`
context.fillText(eightRest, (canvas.width / 2) -100, 400);
context.fillText(currentTime, (canvas.width / 2), 500);
const restaurantWidth = context.measureText(restaurantText).width;
    
    return new THREE.CanvasTexture(canvas);
  };
  
  const contentOfBoard = `Retaurant Zorka Tables`;
  const textures = [contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard].map(createTexture);
  
  const geometry = new THREE.BoxGeometry(160, 60, 10); 
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.set(-30, 30, 100); // Position of the cube

  return <primitive ref={boardRef} object={cube} />;
}
