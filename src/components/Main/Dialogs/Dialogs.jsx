import React from "react";
import style from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogUsers from "./DialogUsers/DialogUsers";

let dialogs = [{id: 1, name: "Vanya"},
{id: 2, name: "Tanya"},
{id: 3, name: "Danya"},
{id: 4, name: "Sanya"},
{id: 5, name: "Tanya"}];


let dialogsItem = dialogs.map(item => <DialogUsers name = {item.name} id = {item.id}/>);

let messages = [{id: 1, message: "Hi!", time: "01.09.22 10:50", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
{id: 2, message: "How are you?", time: "01.09.22 10:51", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
{id: 3, message: "Thanks, everything is fine.", time: "01.09.22 10:57", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg"},
{id: 4, message: "See you today at 12:00?", time: "01.09.22 10:59", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"}];

let messagesItem = messages.map(item => <Message message = {item.message} time = {item.time} src = {item.src} />);

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialogUsers}>
                {dialogsItem}
            </div>
            <div className={style.messages}>
                {messagesItem}
            </div>
        </div>
    )
};

export default Dialogs;