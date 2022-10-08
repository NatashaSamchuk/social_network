import React from "react";
import style from './Photo.module.css';
import img from "./img/beach.jpg"
import fase from "./img/yana.jpg"

const Photo = () => {
    return(
        <div className={style.photo}>
            <div className={style.imgBackground}>
                <img src={img} alt="background photo" />
            </div>
            <div className={style.fase}>
                <img src={fase} alt="fase" />
            </div>
            <h1>Inga Ivanova</h1>
        </div>
    )
};

export default Photo;