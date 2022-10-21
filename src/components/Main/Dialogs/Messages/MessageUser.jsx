import React from "react";
import style from './MessageUser.module.css';
import Message from "./Message/Message";


// const Message = (props) => {
//     return(
//         <div className={style.message}>
//             <div className={style.imgContainer}>
//                 <img src={props.src} alt="foto" />
//             </div>
//             <div className={style.messageContainer}>
//                 {props.message}
//                 <div className={style.timeContainer}>
//                     {props.time}
//                 </div>
//             </div>
//         </div>
//     )
// };
const MessageUser = (props) => {
    // console.log(props.messages)
    let newMessageBody = props.newMessageBody;


    let addMessage = () => {
        // console.log(props.id)
        props.sendMessage(props.id);
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        // console.log(body)
        props.updateNewMessageBody(body);
    }
    let messagesItem = props.messages.map(item => <Message key = {item.key} message = {item.message} time = {item.time} src = {item.src} />);
    return(
        <div className={style.sss}>
            {messagesItem}

            <textarea placeholder='send message'
                      value={newMessageBody}
                      onChange={onNewMessageChange}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default MessageUser;
