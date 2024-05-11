
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

export type T_UserBody={
    id: number,
    fotoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}
export type T_UsersState = {
    users: T_UserBody[]
}


let initialState: T_UsersState = {
    users: []
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
            return{...state,users:state.users.map(u=>u.id===action.userId?{...u,followed:true}:u)}
        case "UNFOLLOW":
return{...state,users:state.users.map(u=>u.id===action.userId ? {...u,followed:false} :u)}
        case "SET-USERS":
            return{...state,users:[...state.users,...action.users]}
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