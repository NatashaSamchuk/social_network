import React from "react";
import {connect} from "react-redux";
import {useLocation, useParams} from 'react-router-dom';
import InfoUser from "./InfoUser"


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        icon: state.infoPage.info
    }
}

class InfoUserContainer extends React.Component {

    // componentWillMount() {
    //     console.log("дид начало")
    //     let userId = this.props.router.params.userId;
    //     this.props.setUserProfile(this.props.users[userId-1]);
    //     console.log("дид конец")
    // }


    render() {
        let userId = this.props.router.params.userId;
        return (
                <InfoUser {...this.props} user={this.props.users[userId-1]}/>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return <Component {...props} router={{location, params}}/>;
    }

    return ComponentWithRouterProp;
}

// export default connect(mapStateToProps, { setUserProfile })(
//     withRouter(ProfileUserContainer)
// );

export default connect(mapStateToProps)(
    withRouter(InfoUserContainer)
);