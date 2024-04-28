import "./index.css"
import User from "../../assets/auth/user.png"
import Email from "../../assets/auth/email.png"
import Eye from "../../assets/auth/eye.png"
import Close from "../../assets/auth/hidden.png"
import { useState } from "react"
import { Link } from "react-router-dom"
const SignInComponent = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleHidden = () => {
        setIsVisible(prev => !prev)
    }
    return (
        <div className="sign__up">
            <form className="sign__content">
                <h1 className="sign__up__title">
                   Вход
                </h1>
                <div className="sign__up__forms">
                    <div className="sign__form">
                        <div className="form__title">
                           Имя
                        </div>

                        <div className="form__input__wrapper">
                            <input type="text" className="form__input" placeholder="Введите имя"  required/>
                            <img src={User} alt="logo" className="form__input__img" />
                        </div>

                        <p className="form__error">

                        </p>
                    </div>
{/*
                    <div className="sign__form">
                        <div className="form__title">
                            Email
                        </div>

                        <div className="form__input__wrapper">
                            <input type="email" className="form__input" placeholder="Введите email"  required/>
                            <img src={Email} alt="logo" className="form__input__img" />
                        </div>
                        <p className="form__error">

                        </p>
                    </div>
    */}


                    <div className="sign__form">
                        <div className="form__title">
                            Пароль
                        </div>

                        <div className="form__input__wrapper">
                            <input type={!isVisible ? `password` : `text`} className="form__input" placeholder="Enter email"  required/>
                            <img src={!isVisible ? Close : Eye} alt="logo" className="form__input__img" onClick={handleHidden} />
                        </div>

                        <p className="form__error">

                        </p>
                    </div>



                    <button className="sign__up__btn">
Войти
                    </button>

<Link style={{textDecoration: "none", color: "#000"}} to="/SignUp">
                    <p className="or">

                       Зарегистрироваться
                    </p>
</Link>



                </div>
            </form>
        </div>
    );
}

export default SignInComponent;