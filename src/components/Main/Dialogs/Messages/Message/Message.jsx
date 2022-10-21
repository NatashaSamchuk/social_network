import React from "react";
import style from './Message.module.css';


const Message = (props) => {
    return(
        <div className={style.message}>
            <div className={style.imgContainer}>
                <img src={props.src} alt="foto" />
            </div>
            <div className={style.messageContainer}>
                {props.message}
                <div className={style.timeContainer}>
                    {props.time}
                </div>
            </div>
        </div>
    )
};

export default Message;
