import { useEffect } from "react";
import RestaurantPreview from "../components/RestaurantPreview/RestaurantPreview";
import useGenerate from "../hooks/useGenerate";
import Navigation from "../components/NavigationWithTitle/index"
const ContentPage = () => {
    const { imges } = useGenerate()
    useEffect(() => {
        console.log("IMMMaa" + JSON.stringify(imges))
    }, [imges])
    return (<>
{/*
        <Navigation /> 
    */}
        <RestaurantPreview />


    </>);
}

export default ContentPage;