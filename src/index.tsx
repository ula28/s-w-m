
import React from 'react';
import ReactDOM, {render} from "react-dom";
import './index.css';
import App from './App';

import {store, T_state} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {reduxStore} from "./redux/redux-store";



 // let rerenderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
           <Provider store={reduxStore}>
                <App
                    // store={store}
                    // dispatch={store.dispatch}
                />
           </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
// }
// rerenderEntireTree()

// store.subscribe(()=>{
//     let state=store.getState()
//     rerenderEntireTree()
//     }
// )

