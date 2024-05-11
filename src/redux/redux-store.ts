import {combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducer} from "./users-reducer";


let RootReducer=combineReducers({
    ProfileReducer:ProfileReducer,
    DialogsReducer:DialogsReducer,
    SidebarReducer:SidebarReducer,
    UsersReducer:UsersReducer
})

export let reduxStore=createStore(RootReducer);

// export type T_RootState=ReturnType<typeof  reduxStore.getState>
export type T_RootState=ReturnType<typeof RootReducer>
export type RootDispatch=typeof reduxStore.dispatch

declare global {
    interface Window {
        store:typeof reduxStore ; // Замените 'any' на тип вашего хранилища
    }
}
window.store=reduxStore