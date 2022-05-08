import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  changePostTextActionCreator,
} from "../../../redux/ProfileReducer";

const PostsContainer = (props) => {
  let state = props.store.getState();
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const postTextChange = (text) => {
    props.store.dispatch(changePostTextActionCreator(text));
  };

  return (
    <div>
      <Posts
        postTextChange={postTextChange}
        addPost={addPost}
        posts={state.profilePage}
      />
    </div>
  );
};

export default PostsContainer;
