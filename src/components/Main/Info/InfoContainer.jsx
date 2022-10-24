import React from "react";
import {connect} from "react-redux";
import Info from "./Info";


let mapStateToProps = (state) => {
    return {
        infoPage: state.infoPage
    }
}


const InfoContainer = connect(mapStateToProps)(Info)

export default InfoContainer;