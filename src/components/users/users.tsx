import React, {FC} from "react";
import {T_MainUsersContainer} from "./UsersContainer";
import s from './users.module.css'
import {T_UserBody} from "../../redux/users-reducer";

export const Users: FC<T_MainUsersContainer> = (props) => {
    if(props.usersPage.users.length===0){
        props.setUsers(
            [
                {
                    id: 1,
                    fotoUrl: "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png",
                    followed: false,
                    fullName: "Petya",
                    status: "Im a boss",
                    location: {city: "Donetsk", country: "Ukraine"}
                },
                {
                    id: 2,
                    fotoUrl: "https://masterpiecer-images.s3.yandex.net/f9ed87a7863811eeb594f6f8c1ba65ae:upscaled",
                    followed: true,
                    fullName: "Vasya",
                    status: "Im a worker",
                    location: {city: "Kyiv", country: "Ukraine"}
                },
                {
                    id: 3,
                    fotoUrl: "https://masterpiecer-images.s3.yandex.net/f9ed87a7863811eeb594f6f8c1ba65ae:upscaled",
                    followed: false,
                    fullName: "Masha",
                    status: "Im a manager",
                    location: {city: "Lviv", country: "Ukraine"}
                },
                {
                    id: 4,
                    fotoUrl: "https://masterpiecer-images.s3.yandex.net/f9ed87a7863811eeb594f6f8c1ba65ae:upscaled",
                    followed: true,
                    fullName: "Sasha",
                    status: "Im a developer",
                    location: {city: "Kharkiv", country: "Ukraine"}
                },
                {
                    id: 5,
                    fotoUrl: "https://masterpiecer-images.s3.yandex.net/f9ed87a7863811eeb594f6f8c1ba65ae:upscaled",
                    followed: false,
                    fullName: "Dasha",
                    status: "Im a designer",
                    location: {city: "Odessa", country: "Ukraine"}
                }
            ]
        )
    }


    return <div>
        {
            props.usersPage.users.map(u=>
                <div key={u.id}>
                    <div>
                        <img src={u.fotoUrl} alt={'dd'} className={s.foto}/>
                        {
                            u.followed ?
                                <button onClick={() => (props.unFollow(u.id))}>unfollow</button>
                                :
                                <button onClick={() => (props.follow(u.id))}>follow</button>
                        }
                    </div>
                    <div>
                        <div>
                            <p>{u.fullName}</p>
                            <p>{u.location.country}</p>
                        </div>
                        <div><p>{u.status}</p>u.
                            <p>{u.location.city}</p>
                        </div>
                    </div>
                </div>)
        }
    </div>
};

