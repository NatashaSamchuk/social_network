import React from "react";
import style from './Friend.module.css';
import {NavLink} from "react-router-dom";

// background = {element.background} foto = {element.foto} name = {element.name} from = {element.from} friends = {element.friends}
const Friend = (props) => {
    let path = "/social_network/dialogs/" + "user" + props.id;
    let path1 = "/social_network/profileUser/" + props.id;
    return (
        <div className={style.friend}>
            <NavLink to={path1} className={style.link}>
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
            </NavLink>
            <span><b>Friends:</b> {props.friends}</span>
            <span><b>Photos:</b> {props.numberFoto}</span>
            <span><b>Videos:</b> {props.numberVideo}</span>
            <NavLink to = {path} className={style.linkButton}>Message</NavLink>
        </div>
    )
};

export default Friend;