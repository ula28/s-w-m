import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App=()=> {

    return (
        <BrowserRouter>
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
                {/*<Route path={'/dialogs'} component={Messages}/>*/}
                {/*<Route path={'/news'} component={News}/>*/}
                {/*<Route path={'/settings'} component={Settings}/>*/}
            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
