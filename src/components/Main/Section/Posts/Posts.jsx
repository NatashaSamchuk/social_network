import React from "react";
import style from './Posts.module.css';
import Post from "./Post/Post";


let posts = [{id: 1, post: "post1", likeCount: 10},
{id: 2, post: "post2", likeCount: 12},
{id: 3, post: "post3", likeCount: 30},
{id: 4, post: "post4", likeCount: 5},
{id: 5, post: "post5", likeCount: 11}];

let postItem = posts.map(item => <Post post={item.post} likes = {item.likeCount}/>);

const Posts = () => {
    return(
        <div className={style.posts}>
            {postItem}
        </div>
    )
};

export default Posts;