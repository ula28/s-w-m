
import {
    addPostActionCreator,
    ProfileReducer,
    T_profilePage,
    updateNewPostCreator
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootDispatch, T_RootState} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";


type T_mapStateToProps={
    profilePage:T_profilePage
}
type T_mapDispatchToProps={
    onChangeValue:(newText:string)=>void
    addPost:()=>void

}
export type T_postsContainer=T_mapStateToProps & T_mapDispatchToProps

// const MyPostsContainer: FC<{
//     // profilePage: T_profilePage,
//     // dispatch: (action: T_Action) => void
//     // store:T_store
// }> = () => {
// const MyPostsContainer = () => {
//     // const {profilePage, dispatch} = props
//     // const addPostHandler = () => {
//     //     props.store.dispatch(addPostActionCreator())
//     //     // let text=newPostElement.current?.value;
//     //     // if (text) {
//     //     //     props.addPost()
//     //     // if (newPostElement.current) {
//     //     //     // newPostElement.current.value = " ";
//     //     //     props.updateNewPostText('')
//     //     // }
//     // }
// // let newPostElement=React.createRef<HTMLTextAreaElement>()
// //     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
// //         let newText = e.currentTarget.value
// //         // if (newText !== undefined) {
// //         //     props.updateNewPostText(newText);
// //         // }
// //         // let action=updateNewPostCreator(newText)
// //         // props.dispatch(action)
// //         props.store.dispatch(updateNewPostCreator(newText))
// //     }
// //     const addPostHandler = () => {
// //         props.store.dispatch(addPostActionCreator())
// //         // let text=newPostElement.current?.value;
// //         // if (text) {
// //         //     props.addPost()
// //         // if (newPostElement.current) {
// //         //     // newPostElement.current.value = " ";
// //         //     props.updateNewPostText('')
// //         // }
// //     }
//     return <StoreContext.Consumer>
//         { (store)=>{
//             const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                 let newText = e.currentTarget.value
//                 store.dispatch(updateNewPostCreator(newText))
//             }
//             const addPostHandler = () => {
//                 store.dispatch(addPostActionCreator())
//                 // let text=newPostElement.current?.value;
//                 // if (text) {
//                 //     props.addPost()
//                 // if (newPostElement.current) {
//                 //     // newPostElement.current.value = " ";
//                 //     props.updateNewPostText('')
//                 // }
//             }
//             return <MyPosts
//                 addPostHandler={addPostHandler}
//                 onChangeHandler={onChangeHandler}
//                 profilePage={store.getState().profilePage}
//             />
//         }
//     }
//     </StoreContext.Consumer>
// }
let mapStateToProps=(state: T_RootState):T_mapStateToProps=>{
    return{
        profilePage:state.ProfileReducer
    }
}
let mapDispatchToProps=(dispatch:Dispatch):T_mapDispatchToProps=>{
    return{
        onChangeValue:(newText:string)=>{
           dispatch(updateNewPostCreator(newText))
        },
        addPost:()=>{
          dispatch(addPostActionCreator())
        }
    }
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

