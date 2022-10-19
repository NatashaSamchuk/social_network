import React from "react";
import {connect} from "react-redux";
import Photo from "./Photo";


let mapStateToProps = (state) => {
    return {
        photoPage: state.photoPage
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

const PhotoContainer = connect(mapStateToProps)(Photo)

export default PhotoContainer;