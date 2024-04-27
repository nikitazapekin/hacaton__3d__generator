/*
import "./Modal.css"
const Modal = ({handleModal, setSettings}) => {

    const handleSettings = () => {
        
    }
    return (<div className="modal">
        <div className="modal__overlay" onClick={handleModal}>

        </div>
        <div className="modal__content">

            <div className="modal__element">
                <p className="resolution">
                    Разрешение:
                </p>
                <div className="resolution__block">
                    <input name="width" type="number" className="resoltion__input"  placeholder="0" defaultValue={0} />
                    <p className="resoltion__x">
                        x
                    </p>
                    <input name="height" type="number" className="resoltion__input" placeholder="0" defaultValue={0} />
                </div>
            </div>
            <div className="modal__element">
                <p className="resolution">
                    Количество итераций:
                </p>

                <div className="iteration__block">
                    <input steps="steps" type="number" className="resoltion__input iter_inp"  placeholder="0" defaultValue={0} />
                </div>
            </div>


            <button className="modal__btn">
                Сохранить
            </button>
        </div>
    </div>);
}

export default Modal;

*/


import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ handleModal, setSettings }) => {
    const [formData, setFormData] = useState({
        width: 0,
        height: 0,
        steps: 0
    });

    const handleSettings = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: parseInt(value) 
        }));
    };

    const saveSettings = () => {
        setSettings(formData);
        handleModal(); 
    };

    return (
        <div className="modal">
            <div className="modal__overlay" onClick={handleModal}></div>
            <div className="modal__content">
                <div className="modal__element">
                    <p className="resolution">Разрешение:</p>
                    <div className="resolution__block">
                        <input
                            name="width"
                            type="number"
                            className="resoltion__input"
                            placeholder="0"
                            defaultValue={formData.width}
                            onChange={handleSettings}
                        />
                        <p className="resoltion__x">x</p>
                        <input
                            name="height"
                            type="number"
                            className="resoltion__input"
                            placeholder="0"
                            defaultValue={formData.height}
                            onChange={handleSettings}
                        />
                    </div>
                </div>
                <div className="modal__element">
                    <p className="resolution">Количество итераций:</p>
                    <div className="iteration__block">
                        <input
                            name="steps"
                            type="number"
                            className="resoltion__input iter_inp"
                            placeholder="0"
                            defaultValue={formData.steps}
                            onChange={handleSettings}
                        />
                    </div>
                </div>
                <button className="modal__btn" onClick={saveSettings}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default Modal;
