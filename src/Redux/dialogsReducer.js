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
import myPhoto from "../assets/myPhoto.jpg"
// import {compose} from "redux";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';



let initialState = {

    // messages: {
    //     user1:[
    //             {
    //                 key: 1,
    //                 message: "Hi!",
    //                 time: "01.09.22 10:50",
    //                 src: user1
    //             },
    //             {
    //                 key: 2,
    //                 message: "How are you?",
    //                 time: "01.09.22 10:51",
    //                 src: user1
    //             },
    //             {
    //                 key: 3,
    //                 message: "Thanks, everything is fine.",
    //                 time: "01.09.22 10:57",
    //                 src: myPhoto
    //             },
    //             {
    //                 key: 4,
    //                 message: "See you today at 12:00?",
    //                 time: "01.09.22 10:59",
    //                 src: user1
    //             }
    //     ],
    //     user2:[
    //         {
    //             key: 1,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: user2
    //         },
    //         {
    //             key: 2,
    //             message: "Hi! How are you?",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         }
    //     ],
    //     user3:[
    //         {
    //             key: 1,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: user3
    //         },
    //         {
    //             key: 2,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         }
    //     ],
    //     user4:[
    //         {
    //             key: 1,
    //             message: "How are you?",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         },
    //         {
    //             key: 2,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: user4
    //         }
    //     ],
    //     user5:[
    //         {
    //             key: 1,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: user5
    //         },
    //         {
    //             key: 2,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         }
    //     ],
    //     user6:[
    //         {
    //             key: 1,
    //             message: "How are you?",
    //             time: "01.09.22 10:50",
    //             src: user6
    //         },
    //         {
    //             key: 2,
    //             message: "Thanks, everything is fine.",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         }
    //     ],
    //     user7:[
    //         {
    //             key: 1,
    //             message: "Hi! How are you?",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         },
    //         {
    //             key: 2,
    //             message: "Thanks, everything is fine.",
    //             time: "01.09.22 10:50",
    //             src: user7
    //         }
    //     ],
    //     user8:[
    //         {
    //             key: 1,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: user8
    //         }
    //     ],
    //     user9:[
    //         {
    //             key: 1,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         }
    //     ],
    //     user10:[
    //         {
    //             key: 1,
    //             message: "Hi!",
    //             time: "01.09.22 10:50",
    //             src: user10
    //         },
    //         {
    //             key: 2,
    //             message: "How are you?",
    //             time: "01.09.22 10:50",
    //             src: myPhoto
    //         }
    //     ]
    // },
    dialogs:[
        {key: 1, name: "Masha", src: user1, messages: [
                    {
                        key: 1,
                        message: "Hi!",
                        time: "01.09.22 10:50",
                        src: user1
                    },
                    {
                        key: 2,
                        message: "How are you?",
                        time: "01.09.22 10:51",
                        src: user1
                    },
                    {
                        key: 3,
                        message: "Thanks, everything is fine.",
                        time: "01.09.22 10:57",
                        src: myPhoto
                    },
                    {
                        key: 4,
                        message: "See you today at 12:00?",
                        time: "01.09.22 10:59",
                        src: user1
                    }
                ]},
        {key: 2, name: "Tanya", src: user2, messages: [
                {
                    key: 1,
                    message: "Hi!",
                    time: "01.09.22 10:50",
                    src: user2
                },
                {
                    key: 2,
                    message: "Hi! How are you?",
                    time: "01.09.22 10:50",
                    src: myPhoto
                }]},
        {key: 3, name: "Vanya", src: user3, messages: [
                {
                    key: 1,
                    message: "Hi!",
                    time: "01.09.22 10:50",
                    src: user3
                },
                {
                    key: 2,
                    message: "Hi!",
                    time: "01.09.22 10:50",
                    src: myPhoto
                }]},
        {key: 4, name: "Danya", src: user4, messages: [
                {
                    key: 1,
                    message: "How are you?",
                    time: "01.09.22 10:50",
                    src: myPhoto
                },
                {
                    key: 2,
                    message: "Hi!",
                    time: "01.09.22 10:50",
                    src: user4
                }
                ]},
        {key: 5, name: "Sara", src: user5, messages: [
                    {
                        key: 1,
                        message: "Hi!",
                        time: "01.09.22 10:50",
                        src: user5
                    },
                    {
                        key: 2,
                        message: "Hi!",
                        time: "01.09.22 10:50",
                        src: myPhoto
                    }
                ]},
        {key: 6, name: "Sasha", src: user6, messages: [
                    {
                        key: 1,
                        message: "How are you?",
                        time: "01.09.22 10:50",
                        src: user6
                    },
                    {
                        key: 2,
                        message: "Thanks, everything is fine.",
                        time: "01.09.22 10:50",
                        src: myPhoto
                    }
                ]},
        {key: 7, name: "Seva", src: user7, messages: [
                    {
                        key: 1,
                        message: "Hi! How are you?",
                        time: "01.09.22 10:50",
                        src: myPhoto
                    },
                    {
                        key: 2,
                        message: "Thanks, everything is fine.",
                        time: "01.09.22 10:50",
                        src: user7
                    }
                ]},
        {key: 8, name: "Ira", src: user8, messages: [
                    {
                        key: 1,
                        message: "Hi!",
                        time: "01.09.22 10:50",
                        src: user8
                    }
                ]},
        {key: 9, name: "Alex", src: user9, messages: [
                    {
                        key: 1,
                        message: "Hi!",
                        time: "01.09.22 10:50",
                        src: myPhoto
                    }
                ]},
        {key: 10, name: "Vitya", src: user10, messages: [
                    {
                        key: 1,
                        message: "Hi!",
                        time: "01.09.22 10:50",
                        src: user10
                    },
                    {
                        key: 2,
                        message: "How are you?",
                        time: "01.09.22 10:50",
                        src: myPhoto
                    }
                ]}
    ],
    // dialogs:[
    //     {key: 1, name: "Masha", src: user1},
    //     {key: 2, name: "Tanya", src: user2},
    //     {key: 3, name: "Vanya", src: user3},
    //     {key: 4, name: "Danya", src: user4},
    //     {key: 5, name: "Sara", src: user5},
    //     {key: 6, name: "Sasha", src: user6},
    //     {key: 7, name: "Seva", src: user7},
    //     {key: 8, name: "Ira", src: user8},
    //     {key: 9, name: "Alex", src: user9},
    //     {key: 10, name: "Vitya", src: user10}
    // ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            // console.log(action.type)
            return {
                ...state,
            newMessageBody: action.body
            };
        case SEND_MESSAGE:
            // console.log(state.dialogs[action.text].messages)
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
            let newMessage = {
                // key: state.dialogs[action.text].messages.length + 1,
                key:6,
                message: body,
                time: dateToday,
                src: myPhoto
            }
            return {
                // ...state,
                // messages: [...state.messages, {
                //     key: state.messages.length + 1,
                //         message: body,
                //         time: dateToday,
                //         src: myPhoto
                // }],
                // newMessageBody: ''
                ...state,
                ...state.dialogs,
                ...state.dialogs[action.text],
                messages: [...state.dialogs[action.text].messages, newMessage],
                newMessageBody: ''
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (text) => ({type: SEND_MESSAGE, text: text})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;

