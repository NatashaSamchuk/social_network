import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderedDOM = (state) =>{
    root.render(
        <BrowserRouter>
            <App state={state} stateApp={store} dispatch={store.dispatch.bind(store)} dispatchMessage={store.dispatch.bind(store)}/>
        </BrowserRouter>
    );
}

renderedDOM(store.getState());
store.subscribe(renderedDOM);
