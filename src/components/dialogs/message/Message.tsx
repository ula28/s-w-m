import React, {ChangeEvent} from "react";
import s from '../Dialogs.module.css'



type T_Message={
    message:string
    // addPost:(text:string)=>void

}
export const Message:React.FC<T_Message>=(props)=>{
   const {message}=props
    // const newMessageElement=React.createRef<HTMLTextAreaElement>()

    return (
            <div className={s.dialog}>
                {message}
            </div>
    )

}



