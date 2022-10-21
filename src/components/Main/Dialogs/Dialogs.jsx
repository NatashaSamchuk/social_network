import React from "react";
import style from './Dialogs.module.css';
// import Message from "./Messages/Message";
import DialogUsers from "./DialogUsers/DialogUsers";
import MessageUser from "./Messages/MessageUser";
import {Route, Routes} from "react-router-dom";




const Dialogs = (props) => {

    // let messagesItem = props.dialogsPage.messages.map(item => <Message key = {item.key} message = {item.message} time = {item.time} src = {item.src} />);
    let dialogsItem = props.dialogsPage.dialogs.map(item => <DialogUsers key = {item.key} name = {item.name} id = {item.key} src = {item.src}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;
    //
    //
    // let addMessage = () => {
    //     console.log(1111)
    //     props.sendMessage();
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     // console.log(body)
    //     props.updateNewMessageBody(body);
    // }
    // console.log(props.dialogsPage.messages)

    return(
        <div className={style.dialogs}>
            <div className={style.dialogUsers}>
                {dialogsItem}
            </div>
            <div className={style.messages}>
                {/*{messagesItem}*/}
                <Routes>
                    <Route exact path="user1" element = {<MessageUser messages={props.dialogsPage.dialogs[0].messages} id = {0} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user2" element = {<MessageUser messages={props.dialogsPage.dialogs[1].messages} id = {1} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user3" element = {<MessageUser messages={props.dialogsPage.dialogs[2].messages} id = {2} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user4" element = {<MessageUser messages={props.dialogsPage.dialogs[3].messages} id = {3} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user5" element = {<MessageUser messages={props.dialogsPage.dialogs[4].messages} id = {4} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user6" element = {<MessageUser messages={props.dialogsPage.dialogs[5].messages} id = {5} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user7" element = {<MessageUser messages={props.dialogsPage.dialogs[6].messages} id = {6} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user8" element = {<MessageUser messages={props.dialogsPage.dialogs[7].messages} id = {7} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user9" element = {<MessageUser messages={props.dialogsPage.dialogs[9].messages} id = {8} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                    <Route exact path="user10" element = {<MessageUser messages={props.dialogsPage.dialogs[9].messages} id = {9} newMessageBody = {newMessageBody} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage}/>}/>
                </Routes>
                {/*<MessageUser/>*/}
                {/*<textarea placeholder='send message'*/}
                {/*          value={newMessageBody}*/}
                {/*          onChange={onNewMessageChange}></textarea>*/}
                {/*<button onClick={addMessage}>Add message</button>*/}
            </div>
        </div>
    )
};

export default Dialogs;