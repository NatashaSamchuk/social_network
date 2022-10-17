import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) =>{
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}

// renderedDOM(store.getState());
// store.subscribe(renderedDOM);

rerenderDOM(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderDOM(state)
});
