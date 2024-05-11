import {connect} from "react-redux";
import {Users} from "./users";
import { T_RootState} from "../../redux/redux-store";
import {followAC, setUsersAC, T_UserBody, T_UsersState, unFollowsAC} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type T_mapStateToProps={
    usersPage:T_UsersState
}
type T_mapDispatchToProps={
    follow:(userId:number)=>void
    unFollow:(userId:number)=>void
    setUsers:(users:T_UserBody[])=>void
}
export type T_MainUsersContainer= T_mapStateToProps & T_mapDispatchToProps

export const mapStateToProps = (state: T_RootState): T_mapStateToProps => {
    return {
        usersPage: state.UsersReducer
    }
}
export const mapDispatchToProps = (dispatch: Dispatch):T_mapDispatchToProps => {
    return {
        follow:(userId:number)=>{
            dispatch(followAC (userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowsAC(userId))
        },
        setUsers:(users:T_UserBody[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)