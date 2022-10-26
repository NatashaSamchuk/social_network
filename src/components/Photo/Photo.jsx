import React from "react";
import style from './Photo.module.css';


const Photo = (props) => {
    return(
        <div className={style.photo}>
            <div className={style.imgBackground}>
                <img src={props.photoPage.background} alt="background photo" />
            </div>
            <div className={style.fase}>
                <img src={props.photoPage.photo} alt="fase" />
            </div>
            <h1>Inga Ivanova</h1>
        </div>
    )
};

export default Photo;