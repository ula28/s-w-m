import React from "react";
import {MyPosts} from "./myposts/MyPosts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";

export function Profile() {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts/>
        </div>

    );
}

