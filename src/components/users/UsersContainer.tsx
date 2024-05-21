import {connect} from "react-redux";
import {Users} from "./usersС";
import { T_RootState} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalsUsersCountAC,
    setUsersAC,
    T_UserBody,
    T_UsersState,
    unFollowsAC
} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type T_mapStateToProps={
    usersPage:T_UsersState
    pageSize:number,
    totalCount:number
    currentPage:number
}
type T_mapDispatchToProps={
    follow:(userId:number)=>void
    unFollow:(userId:number)=>void
    setUsers:(users:T_UserBody[])=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalsUsersCount:(totalCount:number)=>void
}
export type T_MainUsersContainer= T_mapStateToProps & T_mapDispatchToProps

export const mapStateToProps = (state: T_RootState): T_mapStateToProps => {
    return {
        usersPage: state.UsersReducer,
        pageSize:state.UsersReducer.pageSize,
        totalCount:state.UsersReducer.totalCount,
        currentPage:state.UsersReducer.currentPage
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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalsUsersCount:(totalCount:number)=>{
            dispatch(setTotalsUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)