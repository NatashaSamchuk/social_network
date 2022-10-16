import React from "react";
import style from './Section.module.css';
import Pasts from './Posts/Posts'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";



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

    // let a = "/at.png";
    // console.log(a);

    return(
        <section className={style.section}>
            {/*<img src={require('../../../assets/at.png')} alt="img"/>*/}
            {/*<img src={process.env.PUBLIC_URL + '/logo.png'} alt="img"/>*/}
            {/*<img src={process.env.PUBLIC_URL + a} alt="img"/>*/}
            {/*<img src="/at.png" alt="img"/>*/}
            {/*<img src="at.png" alt="img"/>*/}
            {/*<img src={require('assets/at.png')} alt="img"/>*/}
            {/*<img src="%PUBLIC_URL%/image/at.png" alt="img"/>*/}
            {/*<img src="image/at.png" alt="img"/>*/}
            {/*<img src='../../../assets/at.png' alt="img"/>*/}
            {/*<img src='/assets/l.png' alt="img"/>*/}
            {/*<img src='assets/l.png' alt="img"/>*/}
            <textarea ref={newPostItem} onChange={onPostChange} value={props.newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
            <Pasts posts={props.posts}/>
        </section>
    )
};

export default Section;