
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT="SET-TOTAL-USERS-COUNT"

export type T_UserBody={
    id: number,
    name: string,
    status: string| null
    photos:{
        small:string | undefined,
        large: null
    }
    followed:boolean
}
export type T_UsersState = {
   items: T_UserBody[]
    pageSize:number,
    totalCount:number,
    currentPage:number
}

let initialState: T_UsersState = {
    items: [],
    pageSize:5,
    totalCount:0,
    currentPage:1
}
export const UsersReducer = (state = initialState, action:T_MainUsersAC): T_UsersState=> {
    switch (action.type) {
        case "FOLLOW":
            // return {...state,
            // users:state.users.map(u=>{
            //     if(u.id===action.userId){
            //      return   {...u,followed:true}
            //     }
            //     return u
            // })
            // }
            return{...state,items:state.items.map(u=>u.id===action.userId?{...u,followed:true}:u)}
        case "UNFOLLOW":
return{...state,items:state.items.map(u=>u.id===action.userId ? {...u,followed:false} :u)}
        case "SET-USERS":
            return{...state,items:action.users}
        case SET_CURRENT_PAGE:
            return{...state,currentPage:action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return{...state, totalCount:action.count}
        default:
            return state
    }
}
type T_FollowsAC=ReturnType<typeof followAC>
type T_UnFollowsAC=ReturnType<typeof unFollowsAC>
type T_SetUsersAC=ReturnType<typeof setUsersAC>
type T_SetCurrentPageAC=ReturnType<typeof  setCurrentPageAC>
type T_setTotalsUsersCountAC=ReturnType<typeof  setTotalsUsersCountAC>

export type T_MainUsersAC= T_FollowsAC | T_UnFollowsAC|T_SetUsersAC|T_SetCurrentPageAC|T_setTotalsUsersCountAC
export const followAC = (userId: number) => (
    {
        type:FOLLOW,
        userId:userId,

    }as const
)
export const unFollowsAC = (userId: number) => (
    {
        type:UNFOLLOW,
        userId:userId,

    }as const
)
export const setUsersAC = (users: T_UserBody[]) => (
    {
        type:SET_USERS,
        users:users
    }as const
)
export const setCurrentPageAC = (currentPage:number) => (
    {
        type:SET_CURRENT_PAGE,
        currentPage:currentPage
    }as const
)
export const setTotalsUsersCountAC = (totalCount:number) => (
    {
        type:SET_TOTAL_USERS_COUNT,
       count :totalCount
    }as const
)