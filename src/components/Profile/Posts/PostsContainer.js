// import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  changePostTextActionCreator,
} from "../../../redux/ProfileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postTextChange: (text) => {
      dispatch(changePostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
