import globe from "../components/Main/Info/img/globe.png";
import marker from "../components/Main/Info/img/marker.png";
import cap from "../components/Main/Info/img/cap.png";
import gift from "../components/Main/Info/img/gift.png";
import at from "../components/Main/Info/img/at.png";

let initialState = {
    info:[
        {key: 1, icon: globe, meaning: "Ukraine"},
        {key: 2, icon: marker, meaning: "Kyiv"},
        {key: 3, icon: cap, meaning: "KPI"},
        {key: 4, icon: gift, meaning: "20.11.1984"},
        {key: 5, icon: at, meaning: "inga.iv@gmail.com"}
    ]
}

const infoReducer = (state = initialState, action) => {
            return state;
}



export default infoReducer;
//
// let initialState = {};
//
// const sidebarReducer = (state = initialState, action) => {
//
//     return state;
// }
//
// export default sidebarReducer;

