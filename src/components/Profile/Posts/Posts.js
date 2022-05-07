import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = (props) => {
  const posts = props.state.postsData.map((post) => {
    return <Post id={post.id} text={post.text} />;
  });

  let newPost = React.createRef();

  const addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  const changePostText = () => {
    let text = newPost.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <div className={style.pageContent}>
      <h3>My Posts</h3>
      <textarea
        placeholder="New Post"
        ref={newPost}
        onChange={changePostText}
        value={props.state.newPostText}
      />
      <button onClick={addPost}>Add Post</button>
      {posts}
    </div>
  );
};

export default Posts;