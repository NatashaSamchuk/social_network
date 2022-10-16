// import globe from "../components/Main/Info/img/globe.png";
// import marker from "../components/Main/Info/img/marker.png";
// import cap from "../components/Main/Info/img/cap.png";
// import gift from "../components/Main/Info/img/gift.png";
// import at from "../components/Main/Info/img/at.png";
// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";


// let store = {
//     _state: {
//         infoPage: {
//             info:[
//                 {key: 1, icon: globe, meaning: "Ukraine"},
//                 {key: 2, icon: marker, meaning: "Kyiv"},
//                 {key: 3, icon: cap, meaning: "KPI"},
//                 {key: 4, icon: gift, meaning: "20.11.1984"},
//                 {key: 5, icon: at, meaning: "inga.iv@gmail.com"}
//             ]
//         }
        // dialogsPage: {
        //     messages:[
        //         {key: 1, message: "Hi!", time: "01.09.22 10:50", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
        //         {key: 2, message: "How are you?", time: "01.09.22 10:51", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
        //         {key: 3, message: "Thanks, everything is fine.", time: "01.09.22 10:57", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg"},
        //         {key: 4, message: "See you today at 12:00?", time: "01.09.22 10:59", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"}
        //     ],
        //     dialogs:[
        //         {key: 1, name: "Vanya", src: "https://static-cdn5.vigbo.tech/u14829/17548/blog/3921425/2551310/32066975/1000-yana_tkachenko-5303025f47b40c1898e6402b3b9b81df.jpg"},
        //         {key: 2, name: "Tanya", src: "https://avatars.mds.yandex.net/get-altay/5479384/2a0000017f02c0f5e213f5cf104c5373ce71/XXL"},
        //         {key: 3, name: "Danya", src: "https://foto-all.ru/images/photo1.jpg"},
        //         {key: 4, name: "Sanya", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFPvZGNo8HI2aFZOFvjgG5QsXKCRT0iVCVdjKB2LVDZNjfF0DalFQP5Hsbwo7MPTjdoI&usqp=CAU"},
        //         {key: 5, name: "Tanya", src: "https://ru.visafoto.com/img/source03.jpg"}
        //     ],
        //     newMessageBody: ""
        // },
        // postsPage: {
        //     posts:[
        //         {key: 5, post: "A social networking service or SNS (sometimes called a social networking site) is an online platform which people use to build social networks or social relationships with other people who share similar personal or career content, interests, activities, backgrounds or real-life connections.", likeCount: 10},
        //         {key: 4, post: "Social networking services vary in format and the number of features. They can incorporate a range of new information and communication tools, operating on desktops and on laptops, on mobile devices such as tablet computers and smartphones. This may feature digital photo/video/sharing and diary entries online (blogging).", likeCount: 12},
        //         {key: 3, post: "Online community services are sometimes considered social-network services by developers and users, though in a broader sense, a social-network service usually provides an individual-centered service whereas online community services are groups centered.", likeCount: 30},
        //         {key: 2, post: "Generally defined as \"websites that facilitate the building of a network of contacts in order to exchange various types of content online,\" social networking sites provide a space for interaction to continue beyond in-person interactions. ", likeCount: 5},
        //         {key: 1, post: "These computer mediated interactions link members of various networks and may help to create, sustain and develop new social and professional relationships.", likeCount: 11}
        //     ],
        //     newPostText: 'new post text'
        // },
        // sidebar: {}
    // },

    // _callSubscriber() {
    //     console.log('state changed');
    // },
    // getState() {
    //     return this._state;
    // },
    // subscribe(observer) {
    //     this._callSubscriber = observer;
    // },
    // dispatch(action) {
    //     this._state.postsPage = profileReducer(this._state.postsPage, action);
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    //     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    //     this._callSubscriber(this._state);
    // }
// }

// window.state = store;
// export default store;