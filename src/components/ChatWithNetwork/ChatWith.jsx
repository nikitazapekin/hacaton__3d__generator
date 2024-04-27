/*
import { useEffect } from "react";
import useGenerate from "../../hooks/useGenerate";
import "./chatWith.css"

const ChatWithNetwotk = () => {

    const {imges} = useGenerate()

   
 
    return ( 


        <div className="chat__with">

            <div onClick={()=> console.log("IM" +JSON.stringify(imges))}>
                dssdd
            </div>
 
{imges && imges.map(item=> (
    <div className="message">
<img src={item.url} alt="textire" />
</div>
))}
 
        </div>

     );
}
 
export default ChatWithNetwotk;

*/


import { useEffect } from "react";
import useGenerate from "../../hooks/useGenerate";
import "./chatWith.css";
import Logo from "../../assets/images/иконка.png"
const ChatWithNetwotk = ({ imges, handleOpen }) => {

    useEffect(() => {
        console.log(JSON.stringify("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII" + JSON.stringify(imges)))
    }, [imges])
   
    return (
        <div className="chat__with">



<h1 className="close__chat" onClick={handleOpen}>
    Close
</h1>


{/*
<div className="message">
<div className="your__message">

                    <div className="your__message__content">
                        <p className="your__text">
                          dvssvdsvd
                        </p>
                    </div>
                    <img src={Logo} alt="logo" className="your__logo" />
                    </div>

                    <div className="neural__message">

                        <img src={Logo} alt="logo" className="neural__logo" />
                        <div className="message__content">
                            <p className="message__prompt">
                            Сделано!  
                            </p>

                         
                        </div>
                        </div>
                        </div>
    */}



            {imges.map(item => (
                <div className="message">
                    <div className="your__message">

                    <div className="your__message__content">
                        <p className="your__text">
                            {item.prompt}
                        </p>
                    </div>
                    <img src={Logo} alt="logo" className="your__logo" />
                    </div>

                    <div className="neural__message">

                        <img src={Logo} alt="logo" className="neural__logo" />
                        <div className="message__content">
                            <p className="message__prompt">
                            Сделано!  
                            </p>

                            <img src={item.url} alt="texture" className="message__image" />
                        </div>
                    </div>
                </div>
            ))}
            {/*
            <div onClick={() => console.log("IM" + JSON.stringify(imges[0]))}>
                dssdd
            </div>

            <button onClick={() => console.log(JSON.stringify("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII" + JSON.stringify(imges[0])))}>shoooooooooo</button>
       }     <img src="" alt="test" className="mes_img" />
    */}
            {/*
            {imges.map(item => (
                <div className="message">
                    <p>
                        {item.prompt}
                    </p>
                    
                    <img src={item.url} alt="texture" />
                    </div>
                ))}
            */}
            {/* 
        */}

            {/*
        <div className="message">

        </div>

        */}

        </div>
    );
};

export default ChatWithNetwotk;
