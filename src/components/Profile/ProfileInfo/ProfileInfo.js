import React from "react";
import Preloader from "../../Perloader/Preloader";
import avatar from "../../../assets/images/user.png";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>{props.profile.name}</div>
      <img src={avatar} alt="avatar" />
      <div>{props.profile.status}</div>
    </div>
  );
};
export default ProfileInfo;
