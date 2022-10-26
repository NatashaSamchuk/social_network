import React from "react";
import style from './Info.module.css';
import InfoItem from "./InfoItem/InfoItem";

const Info = (props) => {
    let infoItem = props.infoPage.info.map(element => <InfoItem key = {element.key} icon = {element.icon} meaning = {element.meaning}/>)
    return (
        <div className={style.info}>
            <h2>Personal information</h2>
            <div className={style.infoContainerFlex}>
                {infoItem}
            </div>
        </div>
    )
};

export default Info;