import { useEffect } from "react";
import RestaurantPreview from "../components/RestaurantPreview/RestaurantPreview";
import useGenerate from "../hooks/useGenerate";


const ContentPage = () => {

 const {imges} = useGenerate()

 useEffect(()=> {
console.log("IMMMaa" +JSON.stringify(imges))
 }, [imges])
    return (<>
        <RestaurantPreview />
      

    </>);
}

export default ContentPage;