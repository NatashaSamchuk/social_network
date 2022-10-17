import React from "react";
import {connect} from "react-redux";
// import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogsReducer";
// import Dialogs from "./Dialogs";
// import StoreContext from "../../../StoreContext";
import Info from "./Info";


let mapStateToProps = (state) => {
    return {
        infoPage: state.infoPage
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => {
//             dispatch(sendMessageCreator());
//         },
//         updateNewMessageBody: (body) => {
//             console.log(body)
//             dispatch(updateNewMessageBodyCreator(body))
//         }
//     }
// }

const InfoContainer = connect(mapStateToProps)(Info)

export default InfoContainer;