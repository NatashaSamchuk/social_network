import React from "react";
import style from './Section.module.css';
// import Pasts from './Posts/Posts'
import PostsContainer from "./Posts/PostsContainer";
// import ProfileUserContainer from "./ProfileUser/ProfileUserContainer";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";



const Section = (props) => {


    // let a = "/at.png";
    // console.log(a);

    return(
        <section className={style.section}>
            {/*<ProfileUserContainer/>*/}
            <PostsContainer />
        </section>
    )
};

export default Section;