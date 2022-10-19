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

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';



let initialState = {
    messages:[
        {
            key: 1,
            message: "Hi!",
            time: "01.09.22 10:50",
            src: user7
        },
        {
            key: 2,
            message: "How are you?",
            time: "01.09.22 10:51",
            src: user7
        },
        {
            key: 3,
            message: "Thanks, everything is fine.",
            time: "01.09.22 10:57",
            src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg"
        },
        {
            key: 4,
            message: "See you today at 12:00?",
            time: "01.09.22 10:59",
            src: user7
        }
    ],
    dialogs:[
        {key: 1, name: "Masha", src: user1},
        {key: 2, name: "Tanya", src: user2},
        {key: 3, name: "Vanya", src: user3},
        {key: 4, name: "Danya", src: user4},
        {key: 5, name: "Sara", src: user5},
        {key: 6, name: "Sasha", src: user6},
        {key: 7, name: "Seva", src: user7},
        {key: 8, name: "Ira", src: user8},
        {key: 9, name: "Alex", src: user9},
        {key: 10, name: "Vitya", src: user10}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
            newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let date = new Date();
            let today = ("0" + date.getDate()).slice(1);
            let month = date.getMonth() + 1;
            let todayMonth = ("0" + month).slice(1);
            let minute = date.getMinutes();
            if(minute < 10){
                minute = "0" + minute;
            }
            let dateToday = today + "." + todayMonth + "." + String(date.getFullYear()).slice(2) + " " + date.getHours() + ":" + minute;

            return {
                ...state,
                messages: [...state.messages, {
                    key: state.messages.length + 1,
                        message: body,
                        time: dateToday,
                        src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg"
                }],
                newMessageBody: ''
            };
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;

