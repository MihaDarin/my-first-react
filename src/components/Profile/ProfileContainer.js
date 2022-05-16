import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/ProfileReducer";
class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3001/users/2`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
