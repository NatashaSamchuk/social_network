import React from "react";
import style from './Section.module.css';
// import Pasts from './Posts/Posts'
import PostsContainer from "./Posts/PostsContainer";




const Section = () => {


    // let a = "/at.png";
    // console.log(a);

    return(
        <section className={style.section}>
            <PostsContainer />
        </section>
    )
};

export default Section;