import React, {FC} from "react";
import {T_MainUsersContainer} from "./UsersContainer";
import s from './users.module.css'
import {T_UserBody, T_UsersState} from "../../redux/users-reducer";
import axios from 'axios';
import phot from "../../assets/images/photos.png"


export class Users extends React.Component<T_MainUsersContainer>{
    // constructor(props:T_UsersState){
    //     super(props)
    //
    //         axios.get<T_UsersState>('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(res => {
    //                 this.props.setUsers(res.data.items)
    //             })
    // }
 componentDidMount() {
     axios.get<T_UsersState>('https://social-network.samuraijs.com/api/1.0/users')
         .then(res => {
             this.props.setUsers(res.data.items)
         })
 }

    render(){
        return <div>
            {/*<button onClick={this.getUsers}>get users</button>*/}
            {
                this.props.usersPage.items.map(u=>
                    <div key={u.id}>
                        <div>
                            <img src={u.photos.small!=null?u.photos.small:phot} alt={'dd'} className={s .foto}/>
                            {
                                u.followed ?
                                    <button onClick={() => (this.props.unFollow(u.id))}>unfollow</button>
                                    :
                                    <button onClick={() => (this.props.follow(u.id))}>follow</button>
                            }
                        </div>
                        <div>
                            <div>
                                <p>{u.name}</p>
                                <p>{"u.location.country"}</p>
                            </div>
                            <div><p>{u.status}</p>
                                <p>{"u.location.city"}</p>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    }
}


