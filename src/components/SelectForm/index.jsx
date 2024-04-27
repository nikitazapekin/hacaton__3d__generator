
import Pic1 from "../../assets/figure/лупа.png"

import Pic2 from "../../assets/figure/Polygon 1.png"

import Pic3 from "../../assets/figure/Ellipse 2.png"

import Pic4 from "../../assets/figure/Rectangle 3.png"

import Pic5 from "../../assets/figure/Vector.png"
import Pic6 from "../../assets/figure/arcticons_tank.png"
import Pic7 from "../../assets/figure/+.png"

import Pic8 from "../../assets/figure/куббб-02 1.png"
import Pic9 from "../../assets/figure/шар-01.png"

import { useEffect, useState } from "react"
import "./index.css"
const SelectForm = () => {

    const [selectElement, setSelectElement] = useState()
    const handleSelect = (val) => {
        setSelectElement(val)
    }

    useEffect(() => {
        console.log(selectElement)
    }, [selectElement])
    return (

        <div className="select">
            <div className="select__content">
                <h1 className="select__content__title">
                    Выберите форму
                </h1>
                <div className="search__wrapper">
                    <input type="text" className="select__search" placeholder="Поиск" />
                    <img src={Pic1} alt="search" className="select__search__img" />
                </div>
                <div className="select__figures">
                    <div
                        //className="select__figures__item" 
                        className={`select__figures__item ${selectElement == 1 ? `active__fig` : ``}`}
                        onClick={() => handleSelect(1)}>
                        <img src={Pic4} alt="figure"
                        // className="select__figures__image"

                        //  className={`select__figures__item ${selectElement==2 ? `active__fig` : ``}`}
                        />
                        <p className="select__figure__text">
                            Куб
                        </p>
                    </div>
                    <div
                        className={`select__figures__item ${selectElement == 2 ? `active__fig` : ``}`}
                        //className="select__figures__item"
                        onClick={() => handleSelect(2)}>
                        <img src={Pic3} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Шар
                        </p>
                    </div>
                    <div
                        className={`select__figures__item ${selectElement == 3 ? `active__fig` : ``}`}
                        //  className="select__figures__item"
                        onClick={() => handleSelect(3)}>
                        <img src={Pic2} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Пирамида
                        </p>
                    </div>
                    <div

                        className={`select__figures__item ${selectElement == 4 ? `active__fig` : ``}`}
                        //className="select__figures__item"
                        onClick={() => handleSelect(4)}>
                        <img src={Pic5} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Человек
                        </p>
                    </div>
                    <div // className="select__figures__item" 
                        className={`select__figures__item ${selectElement == 5 ? `active__fig` : ``}`}
                        onClick={() => handleSelect(5)}>
                        <img src={Pic6} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Танк
                        </p>
                    </div>
                    <div

                        className={`select__figures__item ${selectElement == 6 ? `active__fig` : ``}`}
                        //className="select__figures__item" 
                        onClick={() => handleSelect(6)}>
                        <img src={Pic7} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Импортировать свою фигуру
                        </p>
                    </div>
                </div>
            </div>
            {selectElement && (
                <div className="selected__element">

                    {selectElement==1 ? (

                        <img src={Pic8} alt="figure" className="selected__figure" />
                    ) : (
                        <img src={Pic9} alt="figure" className="selected__figure" />
                    )}
                    <button className="selected__btn">
                        Выбрать
                    </button>
                </div>
            )}
        </div>
    );
}

export default SelectForm;