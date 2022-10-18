import {connect} from "react-redux";
import Users from "./Users";
import {followCreator, setUsersCreator, unfollowCreator} from "../../../Redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;