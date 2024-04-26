import { useState } from "react"
const useRestoreWindow = () => {
    const [isOpenRestore, setIsOpenRestore] = useState(false)
    const handleCloseRestoreWindow = () => {
        setIsOpenRestore(false)
    }

    return {isOpenRestore, handleCloseRestoreWindow, setIsOpenRestore}
}
 
export default useRestoreWindow;