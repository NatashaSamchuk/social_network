import React from "react";
import { NavLink } from "react-router-dom";
import style from './Nav.module.css';


const Nav = () => {
    return(
        <nav className={style.nav}>
            <NavLink to="/profile" className = { navData => navData.isActive ? style.active : style.item }>My page</NavLink>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
            <NavLink to="/friends" className = { navData => navData.isActive ? style.active : style.item }>Friends</NavLink>
            <NavLink to="/videos" className = { navData => navData.isActive ? style.active : style.item }>Video</NavLink>
            <NavLink to="/fotos" className = { navData => navData.isActive ? style.active : style.item }>Foto</NavLink>
        </nav>
    )
};

export default Nav;