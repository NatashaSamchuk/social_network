import React from "react";
import style from './DialogUsers.module.css';
import {NavLink} from "react-router-dom";

const DialogUsers = (props) => {
    let path = "/social_network/dialogs/" + "user" + props.id;
    return(
        <div className={style.dialogUsersContainer}>
            <div className={style.userFotoContainer}>
                <img src={props.src} alt="foto"/>
            </div>
            <NavLink to = {path} className = {navData => navData.isActive ? style.active : style.item}>{props.name}</NavLink>
        </div>
    )
}

export default DialogUsers;