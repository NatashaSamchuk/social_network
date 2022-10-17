import React from "react";
import {connect} from "react-redux";
// import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogsReducer";
// import Dialogs from "./Dialogs";
// import StoreContext from "../../../StoreContext";
import Friends from "./Friends";


let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
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

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;