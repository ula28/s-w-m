// let  rerenderEntireTree=()=>{
//     console.log('hhhh')
// }
import {ProfileReducer} from "./profile-reducer";
import {
    addMessageCreator,
    changeValueMessageCreator,
    DialogsReducer,
} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const CHANGE_VALUE_NEW_MESSAGE = "CHANGE-VALUE-NEW-MESSAGE";
// const ADD_MESSAGE = "ADD-MESSAGE";

export type T_posts={
    id:number,
    message:string,
    likes:number
}
export type T_dialogs={
    id:number,
    name:string
}
export type T_messages={
    id:number,
    message:string,
}
export type T_sidebar={
}
export type T_profilePage={
    posts:T_posts[]
    newPostValue:string
}
export type T_dialogsPage={
    dialogs:T_dialogs[]
    messages:T_messages[]
    newMessageBody:string
}
export type T_state = {
    profilePage:T_profilePage
    dialogsPage:T_dialogsPage
    sidebar:T_sidebar
}
export type T_store={
    _state: T_state
    // addPost:()=>void
    getState:()=>T_state
    _callSubscriber:( _state: T_state)=>void
    // updateNewPostText:(value:string)=>void
    subscribe:(observer:(_state: T_state)=>void)=>void
    dispatch:(action:any)=>void
}

// export type T_Action=T_AddPostAction & T_ChangePostValueAction & ReturnType<typeof changeValueMessageCreator> & ReturnType<typeof addMessageCreator>
// export const state:T_state = {
//     profilePage:{
//         posts: [
//             {id: 1, message: "hello?how are you", likes: 15},
//             {id: 2, message: "hello?how are you", likes: 15},
//             {id: 3, message: "how are you", likes: 10},
//             {id: 4, message: "are you", likes: 5},
//             {id: 5, message: " you", likes: 11},
//         ],
//         newPostValue: " "
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Petya"},
//             {id: 2, name: "Vasya"},
//             {id: 3, name: "Innokent"},
//             {id: 4, name: "Grigory"},
//         ],
//         messages: [
//             {id: 1, message: "hi"},
//             {id: 2, message: "good"},
//             {id: 3, message: "very good"},
//             {id: 4, message: "sea"},
//         ]
//     },
//     sidebar:{}
// }
// window.state=state;
//  export const addPost=()=>{
//     const newPost:T_posts={
//         id: 1,
//         message:state.profilePage.newPostValue,
//         likes: 15}
//     state.profilePage.posts.push(newPost)
//      state.profilePage.newPostValue=""
//      rerenderEntireTree()
// }
// export const updateNewPostText=(newText:string)=>{
//     state.profilePage.newPostValue=newText;
//     rerenderEntireTree()
// }
// export const subscribe=(observer:()=>void)=>{
//     rerenderEntireTree=observer
//
// }
export const store:T_store ={
    _state:{
        profilePage:{
            posts: [
                {id: 1, message: "hello?how are you", likes: 15},
                {id: 2, message: "hello?how are you", likes: 15},
                {id: 3, message: "how are you", likes: 10},
                {id: 4, message: "are you", likes: 5},
                {id: 5, message: " you", likes: 11},
            ],
            newPostValue: " "
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Petya"},
                {id: 2, name: "Vasya"},
                {id: 3, name: "Innokent"},
                {id: 4, name: "Grigory"},
            ],
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "good"},
                {id: 3, message: "very good"},
                {id: 4, message: "sea"},
            ],
            newMessageBody:''
        },
        sidebar:{}
    },
    _callSubscriber(){
        console.log('r')
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer
    },
    // addPost(){
    //     const newPost={
    //         id: 1,
    //         message:this._state.profilePage.newPostValue,
    //         likes: 15
    //         }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostValue=""
    //    this._callSubscriber(this._state)
    // },
// updateNewPostText(newText:string){
//         this._state.profilePage.newPostValue=newText
//         this._callSubscriber(this._state)
//     },
    dispatch(action){
        this._state.profilePage=ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage=DialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar=SidebarReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
        // if(action.type===ADD_POST){
        //     const newPost={
        //         id: 1,
        //         message:this._state.profilePage.newPostValue,
        //         likes: 15
        //     };
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostValue=""
        //     this._callSubscriber(this._state);
        // } else if(action.type=== UPDATE_NEW_POST_TEXT){
        //     this._state.profilePage.newPostValue=action.newText
        //     this._callSubscriber(this._state)
        //  }
        //  else if(action.type===CHANGE_VALUE_NEW_MESSAGE){
        //     this._state.dialogsPage.newMessageBody=action.value
        //     this._callSubscriber(this._state)
        // }else if(action.type===ADD_MESSAGE){
        //     const newMessage={
        //         id: 5,
        //         message: this._state.dialogsPage.newMessageBody}
        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state.dialogsPage.newMessageBody=''
        //     this._callSubscriber(this._state)
        // }
    },
}


// window.store=store