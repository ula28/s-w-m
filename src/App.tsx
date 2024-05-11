import React from "react";
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer"
import {UsersContainer} from "./components/users/UsersContainer";

// type T_App={
//     posts:T_posts[]
//     dialogs:T_dialogs[]
//     messages:T_messages[]
// }
const App=(
    // props:{store:T_store}
    // (props: { state:T_state, addPost:()=>void,updateNewPostText:(newText:string)=>void}
    )=>{
    // const{store}=props
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Route path={"/profile"}
                       render={() => <Profile
                           // store={store}
                           // profilePage={store.getState().profilePage}
                           // addPost={store.addPost.bind(store)}
                           // updateNewPostText={store.updateNewPostText.bind(store)}
                           // dispatch={store.dispatch.bind(store)}
                       />}/>
                <Route path={'/dialogs'}
                       render={()=><DialogsContainer
                           // store={store}
                           // dialogsPage={store.getState().dialogsPage}
                           // addPost={store.addPost}
                           // dispatch={store.dispatch.bind(store)}
                           // newMessage={store.getState().dialogsPage.newMessageBody}
                       />}
                       />
                <Route path={'/users'}
                       render={()=> <UsersContainer />}/>
                {/*<Route path={'/dialogs'} render={()=><Dialogs/>}/>*/}
                {/*<Route path={'/news'} component={News}/>*/}
                {/*<Route path={'/settings'} component={Settings}/>*/}
            </div>
            {/*<Sidebar/>*/}
        </div>

    );

}

export default App;
