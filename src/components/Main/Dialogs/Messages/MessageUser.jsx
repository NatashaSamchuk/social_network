import React from "react";
import style from './MessageUser.module.css';
import Message from "./Message/Message";


const MessageUser = (props) => {
    let newMessageBody = props.newMessageBody;


    let addMessage = () => {
        props.sendMessage(props.id);
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    let messagesItem = props.messages.map(item => <Message key = {item.key} message = {item.message} time = {item.time} src = {item.src} />);
    return(
        <div className={style.messageUser}>
            {messagesItem}

            <textarea placeholder='send message'
                      value={newMessageBody}
                      onChange={onNewMessageChange}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default MessageUser;
