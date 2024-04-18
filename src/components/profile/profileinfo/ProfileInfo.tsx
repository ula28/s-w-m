import React from "react";
import s from "./ProfileInfo.module.css"



export const ProfileInfo= ()=> {
    return (
        <div className={s.profile}>
            <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt=""/>
            <div className={s.profile_block}>
                ava+descr
            </div>
        </div>

    );
}

