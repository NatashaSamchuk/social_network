import React from "react";
import style from './DialogUsers.module.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

const DialogUsers = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div>
            <NavLink to = {path} className = {navData => navData.isActive ? style.active : style.item}>{props.name}</NavLink>
        </div>
    )
}

export default DialogUsers;