

const CHANGE_VALUE_NEW_MESSAGE = "CHANGE-VALUE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

export type T_dialogs={
    id:number,
    name:string
}
export type T_messages={
    id:number,
    message:string,
}
export type T_dialogsPage={
    dialogs:T_dialogs[]
    messages:T_messages[]
    newMessageBody:string
}
let initialState={
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
}
export const DialogsReducer = (state: T_dialogsPage = initialState, action: T_DialogsAC): T_dialogsPage => {
    // let stateCopy;
    switch (action.type) {
        case "CHANGE-VALUE-NEW-MESSAGE":
            console.log(action.value)
            return {...state, newMessageBody: action.value}
        // stateCopy = {...state,
        //     newMessageBody:action.value
        // }
        // stateCopy.newMessageBody = action.value
        // return stateCopy

        // state.newMessageBody = action.value
        // return state
        case "ADD-MESSAGE":
            const newMessage = {id: 5, message: state.newMessageBody}
            return {...state, messages: [newMessage, ...state.messages], newMessageBody: ""}
        // stateCopy = {...state, messages:[newMessage,...state.messages],newMessageBody: ''}
        // stateCopy.messages = [...state.messages]
        // stateCopy.messages.push(newMessage)
        // stateCopy.newMessageBody = ''
        // return stateCopy
        default:
            return state
    }
}
// export type T_ChangeMessageValueAction={
//     type:"CHANGE-VALUE-NEW-MESSAGE"
//     value:string
// }
// export type T_AddMessageAction={
//     type:"ADD-MESSAGE"
// }
// export const addMessageCreator=():T_AddMessageAction=> (
//     {
//         type: ADD_MESSAGE
//     }
// )


 export type T_ChangeMessageValueAction=ReturnType<typeof changeValueMessageCreator>
 export type T_AddMessageAction=ReturnType<typeof addMessageCreator>

export type T_DialogsAC=T_ChangeMessageValueAction|T_AddMessageAction
export const changeValueMessageCreator=(value:string)=>
    ({
        type:CHANGE_VALUE_NEW_MESSAGE,
        value: value
    } as const
    )
export const addMessageCreator=()=> (
    {
        type: ADD_MESSAGE
    } as const
    )
 //     if(action.type===CHANGE_VALUE_NEW_MESSAGE){
//        state.newMessageBody=action.value
//         // this._callSubscriber(this._state)
//     }else if(action.type===ADD_MESSAGE){
//         const newMessage={
//             id: 5,
//             message: state.newMessageBody}
//         state.messages.push(newMessage)
//        state.newMessageBody=''
//         // this._callSubscriber(this._state)
//     }
//     return state
// }