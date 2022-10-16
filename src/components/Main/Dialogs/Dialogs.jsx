import React from "react";
import style from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogUsers from "./DialogUsers/DialogUsers";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogsReducer";

const Dialogs = (props) => {

    let messagesItem = props.messagesAndDialogs.messages.map(item => <Message message = {item.message} time = {item.time} src = {item.src} />);
    let dialogsItem = props.messagesAndDialogs.dialogs.map(item => <DialogUsers name = {item.name} id = {item.key} src = {item.src}/>);


    let newMessageItem = React.createRef();

    let addMessage = () => {
        newMessageItem.current.value = "";
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = () => {
        let text = newMessageItem.current.value;
        props.dispatch(updateNewMessageBodyCreator(text));
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