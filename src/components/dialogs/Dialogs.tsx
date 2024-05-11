import React, {FC} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {T_MainUsersContainer} from "./DialogsContainer";


export const Dialogs:FC<T_MainUsersContainer
    // {
    // dialogsPage:T_dialogsPage,
    // addMessage:()=>void
    // onChangeHandler:(e: ChangeEvent<HTMLTextAreaElement>)=>void
    // dispatch: (action: T_Action) => void,newMessage:string
// }
>=(props)=> {
    const{dialogsPage, onChangeHandler,addMessage}=props
    // const dialogs=[
    //     {id:1,name:'Petya'},
    //     {id:2,name:'Vasya'},
    //     {id:3,name:'Innokent'},
    //     {id:4,name:'Grigory'},
    // ]
    // const messages=[
    //     {id:1,message:'hi'},
    //     {id:2,message:'good'},
    //     {id:3,message:'very good'},
    //     {id:4,message:'sea'},
    // ]
    let messagesElement=dialogsPage.messages.map(m=> <Message message={m.message} key={m.id} />)
    let dialogsElement=dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id} key={d.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div className={s.dialogs_block}>
                <textarea placeholder="enter your mess" onChange={onChangeHandler}
                          value={dialogsPage.newMessageBody}
                    // ref={newMessageElement}
                ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
                {/*<Message message={messages[0].message} />*/}
                {/*<Message message={messages[1].message}/>*/}
            </div>
        </div>

    )
}

