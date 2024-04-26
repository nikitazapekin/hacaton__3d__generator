
import React, { useRef, useState } from "react";
import * as THREE from "three";
import useMonitoring from "../subscribtions/monitoring";
import { useEffect } from "react";
import useTables from "../hooks/useTables";
import useBoard from "../hooks/useBoard";
export function Board() {
  const boardRef = useRef();
 const {currentTime} = useMonitoring()

const {isbookedTable} = useBoard({currentTime})
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
    
const firstRest = isbookedTable.first.length!=0 ? "№1 booked for "+ isbookedTable.first : `№1: 4/4`
context.fillText(firstRest, (canvas.width / 2) -100, 190);
const secondRest = isbookedTable.second.length!=0 ? "№2 booked for "+ isbookedTable.second : `№2:  4/4`
context.fillText(secondRest, (canvas.width / 2) -100, 260);
const thirdRest =isbookedTable.third.length!=0 ? "№3 booked for "+ isbookedTable.third : `№3:  2/2`
context.fillText(thirdRest, (canvas.width / 2) -100, 330);
const  fourthRest = isbookedTable.fourth.length!=0 ? "№4 booked for "+ isbookedTable.fourth :  `№4:  2/2`
context.fillText(fourthRest, (canvas.width / 2) -100, 400);
context.fillText(currentTime, (canvas.width / 2), 500);
const restaurantWidth = context.measureText(restaurantText).width;
    
    return new THREE.CanvasTexture(canvas);
  };
  
  const contentOfBoard = `Retaurant Zorka Tables`;
  const textures = [contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard, contentOfBoard].map(createTexture);
  
  const geometry = new THREE.BoxGeometry(10, 60, 160); 
  const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }));
  const cube = new THREE.Mesh(geometry, materials);
  cube.position.set(100, 30, 20); // Position of the cube

  return <primitive ref={boardRef} object={cube} />;
}
