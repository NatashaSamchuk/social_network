import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/loginReducer";


const mapStateToProps = (state) => {
    // isAuth: state.loginPage.isAuth,
    // login: state.loginPage.login
    return{
        // isAuth: state.loginPage.isAuth,
        // login: state.loginPage.login
        loginPage: state.loginPage
    }
};




const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer;


