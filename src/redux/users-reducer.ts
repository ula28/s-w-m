
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

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
    pageSize:5,
    totalUsersCount:0
}


let initialState: T_UsersState = {
    items: [],
    pageSize:5,
    totalUsersCount:0
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
            return{...state,items:[...state.items,...action.users]}
        default:
            return state
    }
}
type T_FollowsAC=ReturnType<typeof followAC>
type T_UnFollowsAC=ReturnType<typeof unFollowsAC>
type T_SetUsersAC=ReturnType<typeof setUsersAC>

export type T_MainUsersAC= T_FollowsAC | T_UnFollowsAC|T_SetUsersAC
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