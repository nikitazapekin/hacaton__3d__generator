
import Pic1 from "../../assets/figure/лупа.png"

import Pic2 from "../../assets/figure/Polygon 1.png"

import Pic3 from "../../assets/figure/Ellipse 2.png"

import Pic4 from "../../assets/figure/Rectangle 3.png"

import Pic5 from "../../assets/figure/Vector.png"
import Pic6 from "../../assets/figure/arcticons_tank.png"
import Pic7 from "../../assets/figure/+.png"

import Pic8 from "../../assets/figure/куббб-02 1.png"
import Pic9 from "../../assets/figure/шар-01.png"



import Pic10 from "../../assets/textures/Rectangle 10.png"

import Pic11 from "../../assets/textures/Rectangle 13.png"

import Pic12 from "../../assets/textures/Rectangle 9.png"


import Pic13 from "../../assets/textures/Rectangle 8.png"



import Pic14 from "../../assets/textures/Rectangle 101.png"



import Pic15 from "../../assets/textures/Rectangle 131.png"



import Pic16 from "../../assets/textures/Rectangle 91.png"


import Pic17 from "../../assets/textures/Rectangle 81.png"
import { useEffect, useState } from "react"
import "./index.css"
const SelectFormText = () => {

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
                    Выберите структуру
                </h1>
                <div className="search__wrapper">
                    <input type="text" className="select__search" placeholder="Поиск" />
                    <img src={Pic1} alt="search" className="select__search__img" />
                </div>
                <div className="select__figures">
                    <div

                        className={`select__figures__item ${selectElement == 1 ? `active__fig` : ``}`}
                        onClick={() => handleSelect(1)}>
                        <img src={Pic4} alt="figure"
                            style={{ display: "none" }}
                        />
                        <p className="select__figure__text">
                            Дерево
                        </p>
                    </div>
                    <div
                        className={`select__figures__item ${selectElement == 2 ? `active__fig` : ``}`}
                        //className="select__figures__item"
                        onClick={() => handleSelect(2)}>
                        <img style={{ display: "none" }} src={Pic3} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Керамика
                        </p>
                    </div>
                    <div
                        className={`select__figures__item ${selectElement == 3 ? `active__fig` : ``}`}
                        //  className="select__figures__item"
                        onClick={() => handleSelect(3)}>
                        <img style={{ display: "none" }} src={Pic2} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Металл
                        </p>
                    </div>
                    <div

                        className={`select__figures__item ${selectElement == 4 ? `active__fig` : ``}`}
                        //className="select__figures__item"
                        onClick={() => handleSelect(4)}>
                        <img style={{ display: "none" }} src={Pic5} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Стекло
                        </p>
                    </div>
                    <div // className="select__figures__item" 
                        className={`select__figures__item ${selectElement == 5 ? `active__fig` : ``}`}
                        onClick={() => handleSelect(5)}>
                        <img style={{ display: "none" }} src={Pic6} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Полимеры
                        </p>
                    </div>
                    <div

                        className={`select__figures__item ${selectElement == 6 ? `active__fig` : ``}`}
                        //className="select__figures__item" 
                        onClick={() => handleSelect(6)}>
                        <img src={Pic7} alt="figure" className="select__figures__image" />
                        <p className="select__figure__text">
                            Импортировать свою структуру
                        </p>
                    </div>
                </div>
            </div>


{
    selectElement && (

        <div className="select__texture__element">
                <p className="select__texture__title">
                    Выберите подходящий вариант:
                </p>

{
    selectElement==1 ? (

        <div className="select__textures">
                    <img src={Pic10} alt="texture" className="sel__texture" />
                    <img src={Pic11} alt="texture" className="sel__texture" />
                    <img src={Pic12} alt="texture" className="sel__texture" />
                    <img src={Pic13} alt="texture" className="sel__texture" />
                </div>
                ) :

                (

                    <div className="select__textures">
                    <img src={Pic14} alt="texture" className="sel__texture" />
                    <img src={Pic15} alt="texture" className="sel__texture" />
                    <img src={Pic16} alt="texture" className="sel__texture" />
                    <img src={Pic17} alt="texture" className="sel__texture" />
                </div>
                )
            }

                <button className="sel__text">
                    Показать еще +
                </button>
            </div>
        
    )}
        </div>
    );
}

export default SelectFormText;