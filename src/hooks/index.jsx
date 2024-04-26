import { useState } from "react"

const useSelectFigure = () => {
    const [selectedFigure, setSelectedFigure] = useState()


    const handleSelect = (item) => {
        setSelectedFigure(item)
    }
    return {selectedFigure, setSelectedFigure, handleSelect}
}

export default useSelectFigure