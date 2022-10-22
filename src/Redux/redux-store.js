import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import infoReducer from "./infoReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import photoReducer from "./photoReducer";

//state как обьект, параметры состояния, редакс создаст обьект состояния как был state, у него будут свойства и методы, которые мы передадим
let reducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    infoPage: infoReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    photoPage: photoReducer
});

let store = createStore(reducers);
// let store = configureStore(reducers)

export default store;