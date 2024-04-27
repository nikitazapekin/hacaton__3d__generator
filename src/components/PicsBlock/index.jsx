import "./index.css"
import Pic1 from "../../assets/homepage/Rectangle 20.png"
import Pic2 from "../../assets/homepage/Rectangle 21.png"
import Pic3 from "../../assets/homepage/Rectangle 22.png"
import Pic4 from "../../assets/homepage/Rectangle 23.png"
const PicsBlock = () => {
    return (
        <div className="pics">
            <div className="pics__content">
                <div className="pics__card">
                    <img src={Pic1} alt="pic" className="pics__card__image" />
                </div>
                <div className="pics__card">
                    <img src={Pic2} alt="pic" className="pics__card__image" />
                </div>
                <div className="pics__card">
                    <img src={Pic3} alt="pic" className="pics__card__image" />
                </div>
                <div className="pics__card">
                    <img src={Pic4} alt="pic" className="pics__card__image" />
                </div>
            </div>
        </div>
    );
}

export default PicsBlock;