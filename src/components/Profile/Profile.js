import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <Posts
        state={props.state}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
export default Profile;
