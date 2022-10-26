import React from "react";
import style from "./ProfileUser.module.css";





const ProfileUser = (props) => {
    return (
        <div className={style.profileUser}>

            <div className={style.imgBackground}>
                <img src={props.user.background} alt="background" />
            </div>
            <div className={style.fase}>
                <img src={props.user.foto} alt="photo"/>
            </div>
            <h1>{props.user.name}</h1>

        </div>
    )
};

export default ProfileUser ;