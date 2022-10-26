import React from "react";
import style from "./ProfileUsers.module.css";

import ProfileUserContainer from "./ProfileUser/ProfileUserContainer";
import InfoUserContainer from "./InfoUser/InfoUserContainer";





const ProfileUsers = () => {
    return (
        <div className={style.profileUsers}>
            <ProfileUserContainer/>
            <InfoUserContainer/>
        </div>
    )
};

export default ProfileUsers ;