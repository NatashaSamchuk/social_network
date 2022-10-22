import React from "react";
import style from './Icon.module.css';


const Icon = (props) => {
    return(
        <div className={style.icon}>
            <img src={props.icon} alt="icon"/>
        </div>
    )
};

export default Icon;
