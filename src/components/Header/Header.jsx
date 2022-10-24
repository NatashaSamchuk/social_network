import React from "react";
// import logo from "../../assets/logo.png";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {
    let imgItem = props.loginPage.img.map(img =>  <NavLink to={img.nav}><img className={style.img} src={img.img} alt={"img"}/></NavLink> );
    return(
        <header className={style.header}>
            <div className={style.logoContainer}>
                <img src={props.loginPage.logo} className={style.logo} alt="logo" />
                <span>Social Network</span>
            </div>
            <div className={style.login}>
                { props.loginPage.isAuth ? <div className={style.containerPhotoHeader}><img src={props.loginPage.photo} alt="myPhoto"/> </div>:
                    <NavLink to={'/login'}>Login in</NavLink>
                }
                {imgItem}
            </div>
        </header>
    )
};

export default Header;



