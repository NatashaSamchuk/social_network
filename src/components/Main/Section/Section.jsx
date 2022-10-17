import React from "react";
import style from './Section.module.css';
// import Pasts from './Posts/Posts'
import PostsContainer from "./Posts/PostsContainer";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";



const Section = (props) => {



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
            {/*<textarea placeholder='send post' onChange={onPostChange} value={newPostText}></textarea>*/}
            {/*<button onClick={addPost}>Add post</button>  */}
            <PostsContainer />
        </section>
    )
};

export default Section;