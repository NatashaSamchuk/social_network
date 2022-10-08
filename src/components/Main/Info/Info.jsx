import React from "react";
import style from './Info.module.css';
import globe from "./img/globe.png";
import marker from "./img/marker.png";
import cap from "./img/cap.png";
import gift from "./img/gift.png";
import at from "./img/at.png";

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

let info = [{id: 1, icon: globe, meaning: "Ukraine"}, {id: 2, icon: marker, meaning: "Kyiv"}, {id: 3, icon: cap, meaning: "KPI"}, {id: 4, icon: gift, meaning: "20.11.1984"}, {id: 5, icon: at, meaning: "inga.iv@gmail.com"},];

let infoItem = info.map(element => <InfoItem icon = {element.icon} meaning = {element.meaning}/>)

const Info = () => {
    return (
        <div className={style.info}>
            <h2>Personal information</h2>
             {infoItem}
        </div>
    )
};


export default Info;