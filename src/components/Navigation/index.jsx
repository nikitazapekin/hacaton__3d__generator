
import "./index.css"
import { useState } from "react";

const Navigation = () => {

    const [isActive, setIsActive] = useState(1)

    const handleActive = (val) => {
        setIsActive(val)
    }
    return (
        <div className="navigation">
            <div className="navigation__content">
                <div  className={`${isActive==1 ? `active__header` : ``}  navigation__item`} onClick={()=>handleActive(1)}>
                    Главная
                </div>

                <div  className={`${isActive==2 ? `active__header` : ``}  navigation__item`} onClick={()=>handleActive(2)}>
                    История
                </div>
                <div  className={`${isActive==3 ? `active__header` : ``}  navigation__item`} onClick={()=>handleActive(3)}>
                    Аккаунт
                </div>
            </div>
        </div>
    );
}

export default Navigation;