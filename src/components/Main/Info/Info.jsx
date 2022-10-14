import React from "react";
import style from './Info.module.css';
import InfoItem from "./InfoItem/InfoItem";

const Info = (props) => {
    let infoItem = props.info.info.map(element => <InfoItem icon = {element.icon} meaning = {element.meaning}/>)
    return (
        <div className={style.info}>
            <h2>Personal information</h2>
             {infoItem}
        </div>
    )
};

export default Info;