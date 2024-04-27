
import "./index.css"
import { useState } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {

    const [isActive, setIsActive] = useState(1)

    const handleActive = (val) => {
        setIsActive(val)
    }
    return (
        <div className="navigation">
<Link to="/">
            <b className="navigation__title">
                Красивизатор
                9000
            </b>
</Link>
            <div className="navigation__content">
                <div className={`navigation__item`} onClick={() => handleActive(1)}>
                    Главная
                </div>

                <div className={`navigation__item`} onClick={() => handleActive(2)}>
                    История
                </div>
                <div className={`navigation__item`} onClick={() => handleActive(3)}>
                    Аккаунт
                </div>
            </div>
        </div>
    );
}

export default Navigation;