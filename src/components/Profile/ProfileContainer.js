import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/ProfileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import WithAuthRedirect from "../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 1;
    }
    axios.get(`http://localhost:3001/users/${userId}`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);
