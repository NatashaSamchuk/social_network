const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState =  {
    posts:[
        {key: 5, post: "A social networking service or SNS (sometimes called a social networking site) is an online platform which people use to build social networks or social relationships with other people who share similar personal or career content, interests, activities, backgrounds or real-life connections.", likeCount: 10},
        {key: 4, post: "Social networking services vary in format and the number of features. They can incorporate a range of new information and communication tools, operating on desktops and on laptops, on mobile devices such as tablet computers and smartphones. This may feature digital photo/video/sharing and diary entries online (blogging).", likeCount: 12},
        {key: 3, post: "Online community services are sometimes considered social-network services by developers and users, though in a broader sense, a social-network service usually provides an individual-centered service whereas online community services are groups centered.", likeCount: 30},
        {key: 2, post: "Generally defined as \"websites that facilitate the building of a network of contacts in order to exchange various types of content online,\" social networking sites provide a space for interaction to continue beyond in-person interactions. ", likeCount: 5},
        {key: 1, post: "These computer mediated interactions link members of various networks and may help to create, sustain and develop new social and professional relationships.", likeCount: 11}
    ],
    newPostText: ''
}



const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            console.log(state)
            let newPost = {
                key: state.posts.length + 1,
                post: state.newPostText,
                likeCount: 0
            };

            // state.newPostText = '';

            // state.posts.unshift(newPost);
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}



export default profileReducer;