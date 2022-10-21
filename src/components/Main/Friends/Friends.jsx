import React from "react";
import style from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let friendFollow = props.usersPage.users.filter(function (user){ return user.followed == true});
    let friendItem = friendFollow.map(element => <Friend id = {element.id} key = {element.id} background = {element.background} foto = {element.foto} name = {element.name} from = {element.from} friends = {element.friends} numberFoto = {element.numberFoto} numberVideo = {element.numberVideo}/>);
    // let friendItem = props.friendsPage.friends.map(element => <Friend background = {element.background} foto = {element.foto} name = {element.name} from = {element.from} friends = {element.friends} numberFoto = {element.numberFoto} numberVideo = {element.numberVideo}/>)
    return (
        <div className={style.friends}>
            {friendItem}
        </div>
    )
};

export default Friends;