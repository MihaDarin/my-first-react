import React from "react";
import Preloader from "../../Perloader/Preloader";
import avatar from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>{props.profile.name}</div>
      <img src={avatar} alt="avatar" />
      <ProfileStatus status="efef" />
    </div>
  );
};
export default ProfileInfo;
