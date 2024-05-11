import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar =() =>{
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="src/components/navbar/Navbar">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users">users</NavLink>
            </div>
        </nav>
    );
}

