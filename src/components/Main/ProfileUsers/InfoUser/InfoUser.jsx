import React from "react";
import style from "./InfoUser.module.css";

const InfoUser = (props) => {
    console.log(props.icon[0].icon)
    console.log(props.user)
    return(
        <div className={style.infoItemUser}>
            <div className={style.infoItem}>
                <div className={style.icon}>
                    <img src={props.icon[1].icon} alt="icon" />
                </div>
                <span>{props.user.from}</span>
            </div>
            <div className={style.infoItem}>
                <div className={style.icon}>
                    <img src={props.icon[2].icon} alt="icon" />
                </div>
                <span>{props.user.education}</span>
            </div>
            <div className={style.infoItem}>
                <div className={style.icon}>
                    <img src={props.icon[3].icon} alt="icon" />
                </div>
                <span>{props.user.birthday}</span>
            </div>
            <div className={style.infoItem}>
                <div className={style.icon}>
                    <img src={props.icon[4].icon} alt="icon" />
                </div>
                <span>{props.user.email}</span>
            </div>
        </div>
    )
}
export default InfoUser;