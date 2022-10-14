import React from "react";
import style from './Post.module.css';
// import img from '../../img/beach.jpg'
import heart from '../../img/heart.png'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.imgFotoContainer}>
                <img src="https://static-cdn5.vigbo.tech/u14829/17548/blog/1601759/262700/9885341/500-d897fa6ebb368c73c659bbb8c4fceeef.jpg" alt="foto" />
            </div>
            <div className={style.postItemContainer}>
                <p>{props.post}</p>
                <button><img src={heart} alt="heart" /> <span>{props.likes}</span></button>
            </div>
        </div>
    )
}

export default Post;