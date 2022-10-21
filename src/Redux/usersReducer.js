import user10 from "../assets/user10b.jpg"
import user9 from "../assets/user9b.jpg"
import user8 from "../assets/user8g.webp"
import user7 from "../assets/user7b.jpg"
import user6 from "../assets/user6b.jpg"
import user5 from "../assets/user5g.jpg"
import user4 from "../assets/user4b.jpg"
import user3 from "../assets/user3b.jpg"
import user2 from "../assets/user2g.jpg"
import user1 from "../assets/user1g.jpg"
import background1 from "../assets/background1.jpg"
import background2 from "../assets/background2.webp"
import background3 from "../assets/background3.jpg"
import background4 from "../assets/background4.jpg"
import background5 from "../assets/background5.jpg"
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: 1,
            background: background1,
            foto: user1,
            name: "Masha",
            from: "Ukraine, Kyiv",
            followed: true,
            numberFoto: 105,
            numberVideo: 10,
            friends: 12
        },
        {
            id: 2,
            background: background2,
            foto: user2,
            name: "Tanya",
            from: "Ukraine, Kyiv",
            followed: true,
            numberFoto: 111,
            numberVideo: 10,
            friends: 14
        },
        {
            id: 3,
            background: background4,
            foto: user3,
            name: "Vanya",
            from: "Ukraine, Kyiv",
            followed: true,
            numberFoto: 17,
            numberVideo: 10,
            friends: 8
        },
        {
            id: 4,
            background: background1,
            foto: user4,
            name: "Danya",
            from: "Ukraine, Kyiv",
            followed: true,
            numberFoto: 86,
            numberVideo: 43,
            friends: 60
        },
        {
            id: 5,
            background: background5,
            foto: user5,
            name: "Sara",
            from: "Ukraine, Kyiv",
            followed: true,
            numberFoto: 23,
            numberVideo: 15,
            friends: 12
        },
        {
            id: 6,
            background: background3,
            foto: user6,
            name: "Sasha",
            from: "Ukraine, Kyiv",
            followed: false,
            numberFoto: 65,
            numberVideo: 45,
            friends: 82
        },
        {
            id: 7,
            background: background2,
            foto: user7,
            name: "Seva",
            from: "Ukraine, Kyiv",
            followed: false,
            numberFoto: 67,
            numberVideo: 0,
            friends: 2
        },
        {
            id: 8,
            background: background5,
            foto: user8,
            name: "Ira",
            from: "Ukraine, Kyiv",
            followed: false,
            numberFoto: 35,
            numberVideo: 19,
            friends: 10
        },
        {
            id: 9,
            background: background3,
            foto: user9,
            name: "Alex",
            from: "Ukraine, Kyiv",
            followed: false,
            numberFoto: 85,
            numberVideo: 10,
            friends: 2
        },
        {
            id: 10,
            background: background4,
            foto: user10,
            name: "Vitya",
            from: "Ukraine, Kyiv",
            followed: false,
            numberFoto: 10,
            numberVideo: 19,
            friends: 19
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        // case SET_USERS:
        //     return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;

