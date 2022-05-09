import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  changePostTextActionCreator,
} from "../../../redux/ProfileReducer";
import StoreContext from "../../../StoreContext";
const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const postTextChange = (text) => {
          store.dispatch(changePostTextActionCreator(text));
        };
        return (
          <Posts
            postTextChange={postTextChange}
            addPost={addPost}
            posts={state.profilePage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
