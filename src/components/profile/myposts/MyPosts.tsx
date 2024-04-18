import React from "react";
import {Post} from "./post/Post";
import s from "./MyPosts.module.css";

export const MyPosts= () => {
    return (
        <div className={s.my_posts}>
            <div>
                <h3>MY posts</h3>
            </div>
            <div className={s.my_postsSend}>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                <Post message={'hello?how are you'} likes={15}/>
                <Post message={'hello?how are you'} likes={15}/>
                <Post message={'hello?how are you'} likes={15}/>
                <Post message={'hello?how are you'} likes={15}/>
            </div>

        </div>
    );


}
