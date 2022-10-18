// import React from "react";
import {connect} from "react-redux";
// import Section from "./Section";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profileReducer";



let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
        // posts: state.postsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            // console.log(text)
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}



const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;