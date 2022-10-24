import React from "react";
// import style from "./ProfileUser.module.css";
// import Post from "./Post/Post";
import {useParams} from "react-router-dom";




const ProfileUser = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Profile</h1>
            <img src={props.user.foto} alt=""/>
            <h1>{props.user.name}</h1>
            <h3>{props.user.from}</h3>
            <h3>{props.user.id}</h3>
        </div>
    )
};

export default ProfileUser ;