// import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/ChatsReducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";
import Chats from "./Chats";

const mapStateToProps = (state) => {
  return {
    state: state.chatsPage,
    isAuth: state.auth.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Chats);
