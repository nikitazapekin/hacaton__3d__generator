/*
import { useEffect, useState } from "react"
const useGenerate = () => {
   const [imges, setImges] = useState([])

   const handleAdd = (obj) => {
    setImges(prevImges => [...prevImges, obj]);
   }

   useEffect(()=> {
    console.log("img" +JSON.stringify(imges))

    localStorage.setItem("msg", imges)
   }, [imges])
   return {imges, setImges, handleAdd}
}
 
export default useGenerate;

*/


import { useEffect, useState } from "react";

const useGenerate = () => {
    const [imges, setImges] = useState([]);

    const handleAdd = (obj) => {
        setImges(prevImges => [...prevImges, obj]);
    };

    useEffect(() => {
        localStorage.setItem("msg", JSON.stringify(imges));
    }, [imges]);

    return { imges, setImges, handleAdd };
};

export default useGenerate;
