import React from "react";
import style from "./InfoItem.module.css";

const InfoItem = (props) => {
    return(
        <div className={style.flexContainer}>
            <div className={style.icon}>
                <img src={props.icon} alt="icon" />
            </div>
            <p>{props.meaning}</p>
        </div>
    )
}
export default InfoItem;