import Download from "../../assets/images/импорт.png"
import "./index.css"
import Settings from "../../assets/images/icons8-settings-50 1.png"
import Arrow from "../../assets/images/Arrow 1.png"

import axios from "axios"

import { useState } from "react"



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
const Chat = ({handleClick, handleInput}) => {









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


    return (

        <div className="chat">
            <div className="chat__elements">
                <div className="chat__element">
                    <div className="chat__wrapepr">
                        <input type="text" className="messagw"  placeholder="Опишите желаемую текстуру для выбранной фигуры" onChange={(event)=>handleInput(event.target.value)}/>
                        <img src={Arrow} alt="arrow" className="message__icon" onClick={()=>handleClick} />
                    </div>

                    <img src={Settings} alt="seet" className="settings" />
                </div>



                <div className="chat__element">
                    <div className="chat__wrapepr">
                      {/*  <input type="text" className="messagw" /> */}
                      <input type="color" className="messagw" />

                        <img src={Arrow} alt="arrow" className="message__icon" />
                    </div>
{/*
                    <img src={Settings} alt="seet" className="settings" />
    */}
    <p></p>
                </div>



                <div className="chat__element">
                    <div className="chat__wrapepr">
                        <input   className="messagw" placeholder="Импортировать свою текстуру"  />
                        <img src={Download} alt="arrow" className="message__icon" />
                    </div>
 
<p></p>
                </div>
            </div>
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