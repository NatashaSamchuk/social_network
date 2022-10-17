import React from "react";
import style from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogUsers from "./DialogUsers/DialogUsers";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogsReducer";

const Dialogs = (props) => {

    let messagesItem = props.dialogsPage.messages.map(item => <Message message = {item.message} time = {item.time} src = {item.src} />);
    let dialogsItem = props.dialogsPage.dialogs.map(item => <DialogUsers name = {item.name} id = {item.key} src = {item.src}/>);


    // let newMessageItem = React.createRef();

    let addMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        // console.log(body)
        props.updateNewMessageBody(body);
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogUsers}>
                {dialogsItem}
            </div>
            <div className={style.messages}>
                {messagesItem}
                <textarea placeholder='send message' onChange={onNewMessageChange}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;