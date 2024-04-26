import { useEffect, useState } from "react"
const useSureModal = () => {
   // const [isSureModalOpen, setIsSureModalOpen] =useState(false)
    const handleCloseSureModal = ({isSureModalOpen, setIsSureModalOpen}) => {
        setIsSureModalOpen(false)
    }
 const handleOpenSureModal = () => {
        console.log("openiiiiiiiiiiiing")
        setIsSureModalOpen(prev=>!prev)
    }

/*
    useEffect(()=> {
console.log("IS OPEN " +isSureModalOpen)
    }, [isSureModalOpen]) */
return { handleCloseSureModal, handleOpenSureModal}

}
export default useSureModal