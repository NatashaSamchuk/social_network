import React from "react";
import style from './Friend.module.css';
import {NavLink} from "react-router-dom";

// background = {element.background} foto = {element.foto} name = {element.name} from = {element.from} friends = {element.friends}
const Friend = (props) => {
    let path = "/dialogs/" + props.name;
    // console.log(props)
    return (
        <div className={style.friend}>
            <div className={style.frendCard}>
                <div className={style.friendBackgroundImg}>
                    <img src={props.background} alt="background"/>
                </div>
                <div className={style.friendFoto}>
                    <div className={style.positionFoto}>
                        <img src={props.foto} alt="foto"/>
                    </div>
                </div>
                <h4>{props.name}</h4>
                <p>{props.from}</p>
            </div>
            <span><b>Friends:</b> {props.friends}</span>
            <span><b>Fotos:</b> {props.numberFoto}</span>
            <span><b>Fotos:</b> {props.numberVideo}</span>
            <NavLink to = {path}>Message</NavLink>
        </div>
    )
};

export default Friend;