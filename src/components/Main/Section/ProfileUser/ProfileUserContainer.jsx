import React from "react";
import {connect} from "react-redux";
// import Section from "./Section";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import ProfileUser from "./ProfileUser";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profileReducer";
// import {useParams} from 'react-router-dom';
// import Users from "../../Users/Users";


let mapStateToProps = (state) => {
    return {
        user: state.usersPage.users
    }
}

// class ProfileUserContainer extends React.Component {
//
//     render() {
//         return (
//             <ProfileUser {...this.props} user={this.props.user}/>
//         )
//     }
// }

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return <Component {...props} router={{location, navigate, params}}/>;
//     }
//
//     return ComponentWithRouterProp;
// }



const ProfileUserContainer = connect(mapStateToProps)(ProfileUser)

export default ProfileUserContainer;
//
// export default connect(mapStateToProps)(
//     withRouter(ProfileUserContainer)
// );