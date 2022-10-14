import React from "react";
import style from './Section.module.css';
import Pasts from './Posts/Posts'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";


const Section = (props) => {
    let newPostItem = React.createRef();

    let addPost = () => {
        newPostItem.current.value = "";
        // alert(text);
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
       let text = newPostItem.current.value;
       props.dispatch(updateNewPostTextActionCreator(text));

    }

    return(
        <section className={style.section}>
            <textarea ref={newPostItem} onChange={onPostChange} value={props.newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
            <Pasts posts={props.posts}/>
        </section>
    )
};

export default Section;