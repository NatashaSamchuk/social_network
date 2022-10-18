import React from "react";
import style from './Posts.module.css';
import Post from "./Post/Post";




const Posts = (props) => {
    // console.log(props.newPostText)
    // let newPostItem = React.createRef();
    let newPostText = props.newPostText;
    // console.log(newPostText)

    let addPost = () => {
        // newPostItem.current.value = "";
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        // console.log(text)
        props.updateNewPostText(text);

    }

    let postItem = props.posts.map(item => <Post key = {item.key} post={item.post} likes = {item.likeCount}/>);
    return(
        <div className={style.posts}>
            <textarea placeholder='send post'
                      onChange={onPostChange}
            value={newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
            {postItem}
        </div>
    )
};

export default Posts;