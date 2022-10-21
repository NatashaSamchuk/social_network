import React from "react";
import { NavLink } from "react-router-dom";
import style from './Nav.module.css';


const Nav = () => {
    return(
        <nav className={style.nav}>
            <NavLink to="/social_network/profile" className = { navData => navData.isActive ? style.active : style.item }>My page</NavLink>
            <NavLink to="/social_network/dialogs" className = { navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
            <NavLink to="/social_network/friends" className = { navData => navData.isActive ? style.active : style.item }>Friends</NavLink>
            <NavLink to="/social_network/users" className = { navData => navData.isActive ? style.active : style.item }>Users</NavLink>
            <NavLink to="/social_network/videos" className = { navData => navData.isActive ? style.active : style.item }>Video</NavLink>
            <NavLink to="/social_network/photos" className = { navData => navData.isActive ? style.active : style.item }>Photo</NavLink>
        </nav>
    )
};

export default Nav;