import {connect} from "react-redux";
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
import React from "react";
import axios from "axios";
import {UsersF} from "./usersF";

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
export class UsersAPIComponent extends React.Component<T_MainUsersContainer> {
    // constructor(props:T_UsersState){
    //     super(props)
    //
    //         axios.get<T_UsersState>('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(res => {
    //                 this.props.setUsers(res.data.items)
    //             })
    // }
    componentDidMount() {
        axios.get<T_UsersState>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalsUsersCount(res.data.totalCount)
            })
    }
    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get<T_UsersState>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        //     let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        //     let pages = []
        //     for (let i = 1; i <= pageCount; i++) {
        //         pages.push(i)
        //     }
        return <UsersF
            onPageChanged={this.onPageChanged}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            items={this.props.usersPage.items}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }
}
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

export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)
// export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)--ереименовав UsersAPIComponent на UsersContainer и вверху тоже