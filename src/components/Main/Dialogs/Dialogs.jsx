import React from "react";
import style from './Dialogs.module.css';
import DialogUsers from "./DialogUsers/DialogUsers";
import MessageUser from "./Messages/MessageUser";
import {Route, Routes} from "react-router-dom";
import Icon from "./Icon/Icon";




const Dialogs = (props) => {
    let dialogsItem = props.dialogsPage.dialogs.map(item => <DialogUsers key = {item.key} name = {item.name} id = {item.key} src = {item.src}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;
    let icon = props.dialogsPage.icon;
    let messageUserItem = props.dialogsPage.dialogs.map(item => <Route exet path={"user" + item.key} element={<MessageUser key = {item.key} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage} messages={item.messages} id = {item.key-1}/>}/>);


    return(
        <div className={style.dialogs}>
            <div className={style.dialogUsers}>
                {dialogsItem}
            </div>
            <div className={style.messages}>
                <Routes>
                    <Route exact path="" element = {<Icon icon = {icon}/>}/>
                    {messageUserItem}
                </Routes>
            </div>
        </div>
    )
};

export default Dialogs;