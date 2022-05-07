import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";
import {
  addPostActionCreator,
  changePostTextActionCreator,
} from "../../../redux/ProfileReducer";
const Posts = (props) => {
  const posts = props.state.postsData.map((post) => {
    return <Post id={post.id} text={post.text} />;
  });

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const changePostText = (e) => {
    let text = e.target.value;
    props.dispatch(changePostTextActionCreator(text));
  };

  return (
    <div className={style.pageContent}>
      <h3>My Posts</h3>
      <textarea
        placeholder="New Post"
        onChange={changePostText}
        value={props.state.newPostText}
      />
      <button onClick={addPost}>Add Post</button>
      {posts}
    </div>
  );
};

export default Posts;
