import myPhoto from "../assets/myPhoto.jpg"
import logo from "../assets/logo.png"
import message from "../assets/comments.png"
import home from "../assets/home.png"
import camera from "../assets/camera.png"
import video from "../assets/video.png"
import friends from "../assets/friends.png"
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: true,
    photo: myPhoto,
    logo: logo,
    img: [{img: home, nav: "/social_network/profile"}, {img: message, nav: "/social_network/dialogs"},{img: friends, nav: "/social_network/friends"}, {img: video, nav: "/social_network/videos"}, {img: camera, nav: "/social_network/photos"}]
    //залогинен?
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
                }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export default loginReducer;

