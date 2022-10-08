import React from "react";
import logo from "./img/logo.png";
import style from './Header.module.css';



const Header = () => {
    return(
        <header className={style.header}>
            <img src={logo} className={style.logo} alt="logo" />
            <div>Header</div>
        </header>
    )
};

export default Header;