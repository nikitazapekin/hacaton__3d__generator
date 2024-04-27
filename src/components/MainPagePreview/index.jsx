import "./index.css"
import { Link } from "react-router-dom";
const MainPagePreview = () => {
    return (

        <main className="main__preview">
            <div className="main__content">
                <h1 className="main__title">
                    Красивизатор
                    9000
                </h1>
                <div className="main__btns">
                    <div className="main__btn">
                        <Link to="/SelectFigure" style={{ textDecoration: "none", color: "#68686b" }}>
                            Создать элемент с помощью конструктора
                        </Link>
                    </div>
                    <div className="main__btn">
                        <Link to="3D" style={{ textDecoration: "none", color: "#68686b" }}>

                            Сгенерировать элемент запросом
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainPagePreview;