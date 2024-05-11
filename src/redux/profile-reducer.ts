
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export type T_posts={
    id:number,
    message:string,
    likes:number
}
export type T_profilePage={
    posts:T_posts[]
    newPostValue:string
}
let initialState: T_profilePage={
    posts: [
        {id: 1, message: "hello?how are you", likes: 15},
        {id: 2, message: "hello?how are you", likes: 15},
        {id: 3, message: "how are you", likes: 10},
        {id: 4, message: "are you", likes: 5},
        {id: 5, message: " you", likes: 11},
    ],
    newPostValue: " "
}
export const ProfileReducer = (state = initialState, action:  T_ProfileAC) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: 1, message: state.newPostValue, likes: 15};
            // let stateCopy = {...state}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostValue: ""
            }
        // stateCopy.posts = [...state.posts]
        // stateCopy.posts.push(newPost)
        // stateCopy.newPostValue = ""
        // return stateCopy

        // state.posts.push(newPost)
        // state.newPostValue=""
        // return state
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostValue: action.newText
            }
        // let stateCopy = {...state}
        // stateCopy.newPostValue = action.newText
        // return stateCopy

        // state.newPostValue=action.newText
        // return state
        default:
            return state
    }
    // if(action.type===ADD_POST){
    //     const newPost={
    //         id: 1,
    //         message:state.newPostValue,
    //         likes: 15
    //     };
    //     state.posts.push(newPost)
    //    state.newPostValue=""
    //     // this._callSubscriber(this._state);
    // } else if(action.type=== UPDATE_NEW_POST_TEXT){
    //   state.newPostValue=action.newText
    //     // this._callSubscriber(this._state)
    // }
    // return state
}

//
// export type T_AddPostAction={
//     type:'ADD-POST'
// }
// export type T_ChangePostValueAction={
//     type:'UPDATE-NEW-POST-TEXT'
//     newText:string
// }
// export const addPostActionCreator=():T_AddPostAction=> ({type:ADD_POST})
// export const updateNewPostCreator=(newText:string):T_ChangePostValueAction=>
//     ({type:  UPDATE_NEW_POST_TEXT, newText: newText})

export type T_AddPostAction=ReturnType<typeof addPostActionCreator>
export type T_ChangePostValueAction=ReturnType<typeof updateNewPostCreator>

export type T_ProfileAC=T_AddPostAction |T_ChangePostValueAction
export const addPostActionCreator=()=> ({type:ADD_POST}as const)
export const updateNewPostCreator=(newText:string)=>
    ({type:  UPDATE_NEW_POST_TEXT, newText: newText} as const)