import React from "react";
import s from './Post.module.css'

type T_Post={
    message:string
    likes:number
}
export const Post:React.FC< T_Post> =(props)=> {
    const{message, likes}=props
    return (
            <div>
                <div className={s.postDescr}>
                    <img src="https://i.pinimg.com/564x/3d/50/a8/3d50a8be47f95da3a0a03eaaef83cdd9.jpg" alt="заяц"/>
                    {message}
                </div>
                <span>like {likes}</span>
            </div>
    );
}


