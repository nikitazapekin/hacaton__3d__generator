import Download from "../../assets/images/импорт.png"
import "./index.css"
const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__content">
                <div className="chat__content__btn">
                    <p></p>
                  <p className="chat__content__btn__text">
                      Выбрать формат для импорта
                    </p>
                    <img src={Download} alt="download" className="chat__content__btn__img" />
                </div>
            </div>
        </div>
    );
}

export default Chat;