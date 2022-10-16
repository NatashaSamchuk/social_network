const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';

const dialogsReducer = (state, action) => {

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
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;