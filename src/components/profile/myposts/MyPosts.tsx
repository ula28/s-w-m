import React, {ChangeEvent, FC} from "react";
import {Post} from "./post/Post";
import s from "./MyPosts.module.css";
import {T_postsContainer} from "./MyPostsContainer";



export const MyPosts:FC< T_postsContainer>=(props)=> {
    let postsElement=props.profilePage.posts.map(p=><Post message={p.message} likes={p.likes} key={p.id}/>)
    const onChangeHandler=(e: ChangeEvent<HTMLTextAreaElement>)=>{
        let newText = e.currentTarget.value
       props.onChangeValue(newText)
    }
    const addPostHandler=()=>{
        props.addPost
    }
// const addPostHandler =()=>{
//     // props.dispatch(addPostActionCreator())
//     // let text=newPostElement.current?.value;
//     // if (text) {
//     //     props.addPost()
//         // if (newPostElement.current) {
//         //     // newPostElement.current.value = " ";
//         //     props.updateNewPostText('')
//         // }
//     }
// let newPostElement=React.createRef<HTMLTextAreaElement>()
// const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
//     let newText = e.currentTarget.value
//     // if (newText !== undefined) {
//     //     props.updateNewPostText(newText);
//     // }
//     // let action=updateNewPostCreator(newText)
//     // props.dispatch(action)
//     props.dispatch(updateNewPostCreator(newText))
// }
    return (
        <div className={s.my_posts}>
            <div>
                <h3>MY posts</h3>
            </div>
            <div className={s.my_postsSend}>
                <textarea
                    onChange={onChangeHandler}
                    // onChange={(e)=>{props.updateNewPostText(e.currentTarget.value)}}
                          // ref={newPostElement}
                          value={props.profilePage.newPostValue}
                ></textarea>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div >
                {postsElement}
                {/*<Post message={postData[0].message} likes={postData[0].likes}/>*/}
                {/*<Post message={postData[1].message} likes={postData[1].likes}/>*/}
                {/*<Post message={postData[2].message} likes={postData[2].likes}/>*/}
                {/*<Post message={postData[3].message} likes={postData[3].likes}/>*/}
            </div>

        </div>
    )

}


