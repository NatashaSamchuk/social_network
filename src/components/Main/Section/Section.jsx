import React from "react";
import style from './Section.module.css';
import Pasts from './Posts/Posts'


const Section = () => {
    return(
        <section className={style.section}>
            <textarea></textarea>
            <button>Post</button>
            <Pasts />
        </section>
    )
};

export default Section;