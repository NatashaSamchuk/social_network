import React from "react";
import style from './Users.module.css';
import User from "./User/User";

let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         // {
    //         //     id: 1,
    //         //     avatar: avatar,
    //         //     followed: true,
    //         //     fullName: 'Alex',
    //         //     status: 'working',
    //         //     location: {country: 'Ukraine'}
    //         // },
    //         {
    //             key: 1,
    //             background: "https://statuses-y.ru/wp-content/uploads/palma.webp",
    //             foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg",
    //             name: "Masha",
    //             from: "Ukraine, Kyiv",
    //             followed: true,
    //             numberFoto: 105,
    //             numberVideo: 10,
    //             friends: 12
    //         },
    //         {
    //             key: 2,
    //             background: "https://statuses-y.ru/wp-content/uploads/palma.webp",
    //             foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg",
    //             name: "Vanya",
    //             from: "Ukraine, Kyiv",
    //             followed: true,
    //             numberFoto: 105,
    //             numberVideo: 10,
    //             friends: 12
    //         },
    //         {
    //             key: 3,
    //             background: "https://statuses-y.ru/wp-content/uploads/palma.webp",
    //             foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg",
    //             name: "Tanya",
    //             from: "Ukraine, Kyiv",
    //             followed: true,
    //             numberFoto: 105,
    //             numberVideo: 10,
    //             friends: 12
    //         },
    //         {
    //             key: 4,
    //             background: "https://statuses-y.ru/wp-content/uploads/palma.webp",
    //             foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg",
    //             name: "Danya",
    //             from: "Ukraine, Kyiv",
    //             followed: true,
    //             numberFoto: 105,
    //             numberVideo: 10,
    //             friends: 12
    //         },
    //         {
    //             key: 5,
    //             background: "https://statuses-y.ru/wp-content/uploads/palma.webp",
    //             foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg",
    //             name: "Sanya",
    //             from: "Ukraine, Kyiv",
    //             followed: true,
    //             numberFoto: 105,
    //             numberVideo: 10,
    //             friends: 12
    //         },
    //         {
    //             key: 6,
    //             background: "https://statuses-y.ru/wp-content/uploads/palma.webp",
    //             foto: "https://wpkixx.com/html/pitnik/images/resources/frnd-figure11.jpg",
    //             name: "Masha",
    //             from: "Ukraine, Kyiv",
    //             followed: false,
    //             numberFoto: 105,
    //             numberVideo: 10,
    //             friends: 12
    //         }
    //     ]);
    // }


    let userItem = props.users.map(user => <User  id = {user.key} foto = {user.foto}
                                                  name = {user.name} from = {user.from}
                                                  followed ={user.followed} key = {user.key}
                                                  unfollowUser ={props.unfollowUser}
                                                  followUser = {props.followUser}/>)
    return (
        <div className={style.users}>
            {userItem}
        </div>
    )
}

export default Users;