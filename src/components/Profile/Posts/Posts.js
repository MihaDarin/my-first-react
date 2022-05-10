import React from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = (props) => {
  const posts = props.posts.postsData.map((post) => {
    return <Post id={post.id} text={post.text} key={post.id} />;
  });

  const addPost = () => {
    props.addPost();
  };

  const changePostText = (e) => {
    let text = e.target.value;
    props.postTextChange(text);
  };

  return (
    <div className={style.pageContent}>
      <h3>My Posts</h3>
      <textarea
        placeholder="New Post"
        onChange={changePostText}
        value={props.posts.newPostText}
      />
      <button onClick={addPost}>Add Post</button>
      {posts}
    </div>
  );
};

export default Posts;
