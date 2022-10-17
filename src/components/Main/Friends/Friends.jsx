import React from "react";
import style from './Friends.module.css';
import Friend from "./Friend/Friend";

// let friends = [
//     {key: 1, background: "https://statuses-y.ru/wp-content/uploads/palma.webp", foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg", name: "Masha", from: "Ukraine, Kyiv", numberFoto: 105, numberVideo: 10, friends: 12},
//     {key: 2, background: "https://statuses-y.ru/wp-content/uploads/palma.webp", foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg", name: "Masha", from: "Ukraine, Kyiv", numberFoto: 105, numberVideo: 10, friends: 12},
//     {key: 3, background: "https://statuses-y.ru/wp-content/uploads/palma.webp", foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg", name: "Masha", from: "Ukraine, Kyiv", numberFoto: 105, numberVideo: 10, friends: 12},
//     {key: 4, background: "https://statuses-y.ru/wp-content/uploads/palma.webp", foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg", name: "Masha", from: "Ukraine, Kyiv", numberFoto: 105, numberVideo: 10, friends: 12},
//     {key: 5, background: "https://statuses-y.ru/wp-content/uploads/palma.webp", foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg", name: "Masha", from: "Ukraine, Kyiv", numberFoto: 105, numberVideo: 10, friends: 12},
// ]

const Friends = (props) => {
    let friendItem = props.friendsPage.friends.map(element => <Friend background = {element.background} foto = {element.foto} name = {element.name} from = {element.from} friends = {element.friends} numberFoto = {element.numberFoto} numberVideo = {element.numberVideo}/>)
    return (
        <div className={style.friends}>
            {friendItem}
        </div>
    )
};

export default Friends;