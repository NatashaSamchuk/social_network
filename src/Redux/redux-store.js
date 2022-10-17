import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import infoReducer from "./infoReducer";
import friendsReducer from "./friendsReducer";

//state как обьект, параметры состояния, редакс создаст обьект состояния как был state, у него будут свойства и методы, которые мы передадим
let reducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    infoPage: infoReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers);

export default store;