import Download from "../../assets/images/импорт.png"
import "./index.css"
import Settings from "../../assets/images/icons8-settings-50 1.png"
import Arrow from "../../assets/images/Arrow 1.png"

import axios from "axios"

import { useState } from "react"


import Picker from "../../assets/network/color-picker.png"
import Chatt from "../../assets/network/chat (1).png"
import File from "../../assets/network/folder.png"
import Settt from "../../assets/network/settings.png"
import Send from "../../assets/network/send (3).png"
import { useEffect } from "react"
import useGenerate from "../../hooks/useGenerate"
function convertBase64ToImage(base64String) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (error) => {
            reject(error);
        };
        image.src = base64String;
    });
}
const Chat = ({ handleClick, handleInput, handleModal, setTexture , handleOpen}) => {









    /*
    const {handleAdd, imges} =useGenerate()
    
        const [typedPrompt, setTypedPrompt] = useState("")
    
        const [url, setUrl] = useState()
        const handleInput =(value) => {
            console.log(value)
    setTypedPrompt(value)
    
        }
    const handleClick = () => {
    console.log("work")
        const url = 'http://127.0.0.1:7860/sdapi/v1/txt2img';
    const params = {
        "prompt": typedPrompt,
    
        "negative_prompt": "",
      
        "seed": -1,
        "subseed": -1,
        "subseed_strength": 0,
        "seed_resize_from_h": -1,
        "seed_resize_from_w": -1,
      
       
        "batch_size": 1,
        "n_iter": 1,
        "steps": 5,
        "cfg_scale": 7,
        "width": 128,
        "height": 128,
        "restore_faces": true,
        "tiling": true,
        "do_not_save_samples": false,
        "do_not_save_grid": false,
        "eta": 0,
        "denoising_strength": 0,
        "s_min_uncond": 0,
        "s_churn": 0,
        "s_tmax": 0,
        "s_tmin": 0,
        "s_noise": 0,
        "override_settings": {},
        "override_settings_restore_afterwards": true,
       
        "refiner_switch_at": 0,
        "disable_extra_networks": false,
       
        "comments": {},
        "enable_hr": false,
        "firstphase_width": 0,
        "firstphase_height": 0,
        "hr_scale": 2,
       
        "hr_second_pass_steps": 0,
        "hr_resize_x": 0,
        "hr_resize_y": 0,
       
        "hr_prompt": "",
        "hr_negative_prompt": "",
       
      
      
        "script_args": [],
        "send_images": true,
        "save_images": false,
        "alwayson_scripts": {}
       
        
    };
    axios.post(url, params)  
    .then(response => {
        console.log('Ответ сервера:', response.data);
        console.log("resp", response.data.images[0])
        const base64String = response.data.images[0]
        console.log(base64String)
        const img = new Image();
    img.src = 'data:image/png;base64,' + base64String;
    img.onload = function() {
      document.body.appendChild(img);
    
      setUrl(img)
      const obj = {
        url: img,
        id: imges.length,
        prompt: typedPrompt
      }
      handleAdd(obj)
    };
    })
    .catch(error => {
        console.error('Ошибка запроса:', error);
    });
    }
    
    
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                handleClick();
            }
        };
    
        window.addEventListener('keypress', handleKeyPress);
    
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [handleClick])
     */

    /*
    
    import Picker from "../../assets/network/color-picker.png"
    import Chat from "../../assets/network/chat (1).png"
    import File from "../../assets/network/folder.png"
    
    import Send from "../../assets/network/send (3).png"
    
    */
    return (

        <div className="chat">


            <div className="chat__content">

                <div className="chat__input__wrapper">

                    <input type="text" className="chat__input" placeholder="Опишите текстуру" 
                    onChange={(event) => handleInput(event.target.value)}
                    />
                    <img src={Send} alt="enter" className="chat__input__image" />
                </div>

                <div className="color__wrapper">
                    <input type="color" className="chat__input__color" />
                {/*    <img src={Picker} alt="enter" className="chat__picker__image" /> */}
                </div>




                <div className="chat__file">
    <img 
        src={File} 
        alt="enter" 
        className="chat__file__image"
        onClick={() => {
            document.querySelector('.fileInput').click();
        }}
    />
    <input
        className="fileInput"
        type="file"
        onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageUrl = event.target.result;
                setTexture(imageUrl);
            };
            reader.readAsDataURL(file);
        }}
        style={{ display: 'none' }}
    />
</div>

{/*
                <div className="chat__file">
                <input
                            className="messagw"
                            type="file"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                    const imageUrl = event.target.result;
                                    setTexture(imageUrl);
                                };
                                reader.readAsDataURL(file);
                            }}
                        />
                        
                        <img src={File} alt="enter" className="chat__file__image" />
                        </div>
                        */}
                <img src={Settings} alt="enter" className="chat__file__image" onClick={handleModal}  />
                <img src={Chatt} alt="enter" className="chat__chat__image" onClick={handleOpen} />
            </div>
            {/*
            <div className="chat__elements">
            <div className="chat__element">
                    <div className="chat__wrapepr">
                        <input type="text" className="messagw" placeholder="Опишите желаемую текстуру для выбранной фигуры" onChange={(event) => handleInput(event.target.value)} />
                        <img src={Arrow} alt="arrow" className="message__icon" onClick={() => handleClick} />
                    </div>
                    <img src={Settings} alt="seet" className="settings" onClick={handleModal} />
                </div>

                <div className="chat__element">
                    <div className="chat__wrapepr">
                      
                        <input type="color" className="messagw" />

                        <img src={Arrow} alt="arrow" className="message__icon" />
                    </div>
             <p></p>
                </div>



                <div className="chat__element">
                    <div className="chat__wrapepr">


                        <input
                            className="messagw"
                            type="file"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                    const imageUrl = event.target.result;
                                    setTexture(imageUrl);
                                };
                                reader.readAsDataURL(file);
                            }}
                        />

                       
                        <img src={Download} alt="arrow" className="message__icon" />
                    </div>

                    <p></p>
                </div>
                </div>
                        */}
        </div>
    );
}

export default Chat;



/*


function convertBase64ToImage(base64String) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (error) => {
            reject(error);
        };
        image.src = base64String;
    });
}
const Homepage = () => {



const [typedPrompt, setTypedPrompt] = useState("")
    const handleInput =(value) => {
        console.log(value)
    }
const handleClick = () => {
console.log("work")
    const url = 'http://127.0.0.1:7860/sdapi/v1/txt2img';
const params = {
    "prompt": typedPrompt,

    "negative_prompt": "",
  
    "seed": -1,
    "subseed": -1,
    "subseed_strength": 0,
    "seed_resize_from_h": -1,
    "seed_resize_from_w": -1,
  
   
    "batch_size": 1,
    "n_iter": 1,
    "steps": 5,
    "cfg_scale": 7,
    "width": 128,
    "height": 128,
    "restore_faces": true,
    "tiling": true,
    "do_not_save_samples": false,
    "do_not_save_grid": false,
    "eta": 0,
    "denoising_strength": 0,
    "s_min_uncond": 0,
    "s_churn": 0,
    "s_tmax": 0,
    "s_tmin": 0,
    "s_noise": 0,
    "override_settings": {},
    "override_settings_restore_afterwards": true,
   
    "refiner_switch_at": 0,
    "disable_extra_networks": false,
   
    "comments": {},
    "enable_hr": false,
    "firstphase_width": 0,
    "firstphase_height": 0,
    "hr_scale": 2,
   
    "hr_second_pass_steps": 0,
    "hr_resize_x": 0,
    "hr_resize_y": 0,
   
    "hr_prompt": "",
    "hr_negative_prompt": "",
   
  
  
    "script_args": [],
    "send_images": true,
    "save_images": false,
    "alwayson_scripts": {}
   
    
};
axios.post(url, params)  
.then(response => {
    console.log('Ответ сервера:', response.data);
    console.log("resp", response.data.images[0])
    const base64String = response.data.images[0]
    console.log(base64String)
    const img = new Image();
img.src = 'data:image/png;base64,' + base64String;
img.onload = function() {
  document.body.appendChild(img);
};
})
.catch(error => {
    console.error('Ошибка запроса:', error);
});
}


*/