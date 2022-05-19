import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData } from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3001/auth`).then((response) => {
      let { id, email, login } = response.data.me;
      this.props.setUserData(id, email, login);
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setUserData })(HeaderContainer);
