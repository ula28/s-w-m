import s from "./users.module.css";
import photo from "../../assets/images/photos.png";
import {T_UserBody} from "../../redux/users-reducer";
import {useState} from "react";


export type T_userF = {
    onPageChanged: (p: number) => void,
    totalCount: number
    currentPage: number
    pageSize: number
    items: T_UserBody[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export const UsersF=(props:T_userF)=> {
    const [state, setState] = useState({
        MaxCurrentPage: 10,
        MinCurrentPage: 1,
        // step:5

    });
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
       let pages = [];
    let step=5
       for (let i = state.MinCurrentPage; i <= state.MaxCurrentPage; i++) {
           pages.push(i)
       }

    const NextPageUsers = (isDirection: boolean) => {
        if (isDirection) {
            setState((state) => ({
                MaxCurrentPage: state.MaxCurrentPage + step,
                MinCurrentPage: state.MinCurrentPage + step
            }))
        } else {
            state.MinCurrentPage > step &&
            setState((state) => ({
                MaxCurrentPage: state.MaxCurrentPage - step,
                MinCurrentPage: state.MinCurrentPage - step
            }))
        }
    };
    return <div>
        {/*<button onClick={this.getUsers}>get users</button>*/}
        <div>
            <button onClick={()=>NextPageUsers(false)}>{"<"}</button>
            {
                pages.map(p => {
                    return <button className={props.currentPage === p ? s.selectedPage : ""}
                                   onClick={(e) => {
                                       props.onPageChanged(p)
                                   }}
                    >{p}</button>
                })
            }
            <button onClick={()=>NextPageUsers(true)}>{">"}</button>
        </div>
        {
            props.items.map(u =>
                <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : photo} alt={"dd"} className={s.foto}/>
                        {
                            u.followed ?
                                <button onClick={() => (props.unFollow(u.id))}>unfollow</button>
                                :
                                <button onClick={() => (props.follow(u.id))}>follow</button>
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

