import React, {FC} from "react";
import {MyPosts} from "./myposts/MyPosts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {MyPostsContainer} from "./myposts/MyPostsContainer";





export const Profile:FC<{
    // profilePage:T_profilePage,
    // addPost:()=>void,
    // updateNewPostText:(newText:string)=>void}
    // dispatch:(action:T_Action)=>void
    // store:T_store
}>=(props)=> {
    return (
        <div >
            <ProfileInfo />
            <MyPostsContainer
               // store={props.store}
                // profilePage={props.profilePage}
                //      dispatch={props.dispatch}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>

    );
}

