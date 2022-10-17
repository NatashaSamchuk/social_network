const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

// const dialogsReducer = (state, action) => {
//
//     switch (action.type) {
//         case UPDATE_NEW_MESSAGE_BODY:
//             state.newMessageBody = action.body;
//             return state;
//         case SEND_MESSAGE:
//             let body = state.newMessageBody;
//             let date = new Date();
//             let today = ("0" + date.getDate()).slice(1);
//             let month = date.getMonth() + 1;
//             let todayMonth = ("0" + month).slice(1);
//             let dateToday = today + "." + todayMonth + "." + String(date.getFullYear()).slice(2) + " " + date.getHours() + ":" + date.getMinutes();
//             state.newMessageBody = "";
//             state.messages.push({
//                 key: state.messages.length + 1,
//                 message: body,
//                 time: dateToday,
//                 src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg"
//             });
//             return state;
//         default:
//             return state;
//     }
// }
// export const sendMessageCreator = () => ({type: SEND_MESSAGE})
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
//
// export default dialogsReducer;

let initialState = {
    messages:[
        {key: 1, message: "Hi!", time: "01.09.22 10:50", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
        {key: 2, message: "How are you?", time: "01.09.22 10:51", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
        {key: 3, message: "Thanks, everything is fine.", time: "01.09.22 10:57", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg"},
        {key: 4, message: "See you today at 12:00?", time: "01.09.22 10:59", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"}
    ],
    dialogs:[
        {key: 1, name: "Vanya", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
        {key: 2, name: "Tanya", src: "https://avatars.mds.yandex.net/get-altay/5479384/2a0000017f02c0f5e213f5cf104c5373ce71/XXL"},
        {key: 3, name: "Danya", src: "https://foto-all.ru/images/photo1.jpg"},
        {key: 4, name: "Sanya", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFPvZGNo8HI2aFZOFvjgG5QsXKCRT0iVCVdjKB2LVDZNjfF0DalFQP5Hsbwo7MPTjdoI&usqp=CAU"},
        {key: 5, name: "Tanya", src: "https://ru.visafoto.com/img/source03.jpg"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let date = new Date();
            let today = ("0" + date.getDate()).slice(1);
            let month = date.getMonth() + 1;
            let todayMonth = ("0" + month).slice(1);
            let dateToday = today + "." + todayMonth + "." + String(date.getFullYear()).slice(2) + " " + date.getHours() + ":" + date.getMinutes();
            state.newMessageBody = "";
            state.messages.push({
                key: state.messages.length + 1,
                message: body,
                time: dateToday,
                src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg"
            });
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;

