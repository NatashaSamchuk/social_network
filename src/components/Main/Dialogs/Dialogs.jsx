import React from "react";
import style from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogUsers from "./DialogUsers/DialogUsers";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../Redux/state";

const Dialogs = (props) => {
    // console.log(props)
    let messagesItem = props.messagesAndDialogs.messages.map(item => <Message message = {item.message} time = {item.time} src = {item.src} />);
    let dialogsItem = props.messagesAndDialogs.dialogs.map(item => <DialogUsers name = {item.name} id = {item.key} src = {item.src}/>);

    // let newMessage = React.createRef();

    // let addMessage = () => {
    //     let text = newMessage.current.value;
    //     alert(text);
    // }

    let newMessageItem = React.createRef();

    let addMessage = () => {
        newMessageItem.current.value = "";
        props.dispatchMessage(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageItem.current.value;
        props.dispatchMessage(updateNewMessageTextActionCreator(text));
        // console.log(text);
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogUsers}>
                {dialogsItem}
            </div>
            <div className={style.messages}>
                {messagesItem}
                <textarea ref={newMessageItem} onChange={onMessageChange} value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;