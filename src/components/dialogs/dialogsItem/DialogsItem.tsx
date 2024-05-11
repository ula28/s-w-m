import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type T_DialogItem={
    name:string
    id:number
}
export const DialogItem=({name,id}:T_DialogItem)=>{
    let path='/dialogs/'+ id
    return <div className={s.dialog+' '+s.active}>
        <NavLink to={path}>{name}</NavLink>
    </div>
}