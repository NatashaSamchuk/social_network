import React from "react";
import style from './Post.module.css';
import img from '../../img/beach.jpg'
import heart from '../../img/heart.png'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={img} alt="foto" />
            <p>{props.post}</p>
            <button><img src={heart} alt="heart" /> {props.likes}</button>
        </div>
    )
}

export default Post;