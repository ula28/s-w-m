import React, {ChangeEvent, FC} from "react";
import {Dialogs} from "./Dialogs";
import {addMessageCreator, changeValueMessageCreator, T_dialogsPage} from "../../redux/dialogs-reducer";
import {RootDispatch, T_RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// const DialogsContainer:FC<{ store: T_store }> = (props) => {
//     const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         { (store)=>{
//             const onChangeHandler=(e: ChangeEvent<HTMLTextAreaElement>)=>{
//                 let value=e.currentTarget.value
//                 store.dispatch( changeValueMessageCreator(value))
//             }
//             const addMessage=()=>{
//                 // let text=newMessageElement.current?.value
//                 //     if (text) {
//                 //      props.addPost(text)
//                 //         if (newMessageElement.current) {
//                 //             newMessageElement.current.value = " ";
//                 //         }
//                 //  }
//                 store.dispatch(addMessageCreator())
//             }
//             return <Dialogs
//                 dialogsPage={store.getState().dialogsPage}
//                 onChangeHandler={onChangeHandler}
//                 addMessage={addMessage}
//             />
//         }
//     }
//     </StoreContext.Consumer>
// };
export type T_MainUsersContainer={
    dialogsPage:T_dialogsPage
    onChangeHandler:(e: ChangeEvent<HTMLTextAreaElement>)=>void
    addMessage:()=>void
}
const mapStateToProps = (state: T_RootState) => {
    return {
        dialogsPage: state.DialogsReducer
        // messages:state.dialogsPage.messages,
        // newMessageBody:state.dialogsPage.newMessageBody,
        // dialogs:state.dialogsPage.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let value = e.currentTarget.value
            dispatch(changeValueMessageCreator(value))
        },
        addMessage:()=>{
            dispatch(addMessageCreator())
        }

    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;