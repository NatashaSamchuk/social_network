import React from "react";
import style from './User.module.css';
import {NavLink} from "react-router-dom";

let User = (props) => {
    // console.log(props.id)
    return (

        // <div className={style.usersWrapper}>
        //     {props.users.map(user =>
        //         <div key={user.id} className={style.User}>
        //             <NavLink to={'/profile/' + user.id}>
        //                 <img src={user.avatar} alt="photo"/>
        //             </NavLink>
        //             <div>{user.fullName}</div>
        //             <div>{user.followed}</div>
        //             <div>{user.status}</div>
        //             <div>{user.location.country}</div>
        //             <div>
        //                 {user.followed
        //                     ? <button onClick={() => {
        //                         props.follow(user.id)
        //                     }}>Unfollow</button>
        //                     : <button onClick={() => {
        //                         props.unfollow(user.id)
        //                     }}>Follow</button>
        //                 }
        //             </div>
        //         </div>)
        //     }
        // </div>

        <div className={style.usersWrapper}>
            <div className={style.user}>
                <div className={style.userImgContainer}>
                    {/*<NavLink to={'/social_network/profile/' + props.id}>*/}
                        <img src={props.foto} alt="photo"/>
                    {/*</NavLink>*/}
                </div>
                <div>{props.name}</div>
                <div>{props.followed}</div>
                <div>{props.from}</div>
                <div>
                    {props.followed
                        ? <button onClick={() => {props.followUser(props.id)}}>Unfollow</button>
                        : <button onClick={() => {props.unfollowUser(props.id)}}>Follow</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default User;


// <div className={style.user}>
//     <div className={style.userCard}>
//         <div className={style.userBackgroundImg}>
//             <img src={props.background} alt="background"/>
//         </div>
//         <div className={style.friendFoto}>
//             <div className={style.positionFoto}>
//                 <img src={props.foto} alt="foto"/>
//             </div>
//         </div>
//         <h4>{props.name}</h4>
//         <p>{props.from}</p>
//     </div>
//     <span><b>Friends:</b> {props.friends}</span>
//     <span><b>Fotos:</b> {props.numberFoto}</span>
//     <span><b>Fotos:</b> {props.numberVideo}</span>
//     <div>
//         {user.followed
//             ? <button onClick={() => {props.followUser(props.id)}}>Unfollow</button>
//             : <button onClick={() => {props.unfollowUser(props.id)}}>Follow</button>
//         }
//     </div>
// </div>
//