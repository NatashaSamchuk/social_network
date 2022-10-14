import React from "react";
import style from './Posts.module.css';
import Post from "./Post/Post";




const Posts = (props) => {
    // console.log(props);
    let postItem = props.posts.map(item => <Post post={item.post} likes = {item.likeCount}/>);
    return(
        <div className={style.posts}>
            {postItem}
        </div>
    )
};

export default Posts;