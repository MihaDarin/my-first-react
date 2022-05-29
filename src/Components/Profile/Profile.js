import React from "react";
// import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
const Profile = () => {
  return (
    <div>
      <div>Avatar</div>
      <div>
        <input placeholder="Status"></input>
      </div>
      <div>
        <textarea placeholder="New Post"></textarea>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
