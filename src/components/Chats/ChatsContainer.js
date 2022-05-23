// import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/ChatsReducer";
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
const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats);
export default ChatsContainer;
