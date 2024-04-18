import React from "react";
import s from './Dialogs.module.css'
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
type T_Message={
    message:string
}
const Message:React.FC<T_Message>=(props)=>{
   const {message}=props
    return <div className={s.dialog}>{message}</div>
}

export const Dialogs= ()=> {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <DialogItem name={"Petya"} id={1}/>
                <DialogItem name={"Vasya"} id={2}/>
                <DialogItem name={"Innokent"} id={3}/>
                <DialogItem name={"Grigory"} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'hi'}/>
                <Message message={'good'}/>
                <Message message={'very good'}/>
            </div>
        </div>

    )
}

