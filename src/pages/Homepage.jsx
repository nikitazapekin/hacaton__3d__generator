import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
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

// Устанавливаем источник изображения как data URI с помощью строки Base64
img.src = 'data:image/png;base64,' + base64String;

// Добавляем обработчик события, который будет выполнен после загрузки изображения
img.onload = function() {
  // Вставляем изображение на страницу
  document.body.appendChild(img);
};
/*
convertBase64ToImage(base64String)
    .then((image) => {
        console.log("Изображение успешно загружено:", image);
        // Действия с объектом изображения, например, добавление его в DOM:
        document.body.appendChild(image);
    })
    .catch((error) => {
        console.error("Ошибка при загрузке изображения:", error);
    });
  */



})
.catch(error => {
    console.error('Ошибка запроса:', error);
});
}


    return ( 
        <>
        
        Homepage
        

        <Link to={`/3D`}>
            3D
        </Link>



        <div className="neural">
            <input type="text" className="input__prompt" onChange={(event)=> handleInput(event.target.value)} />
            <button className="input__btn" onClick={()=>handleClick()}>
                create
            </button>
        </div>
        </>
     );
}
 
export default Homepage;