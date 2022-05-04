import React from "react";
import style from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
      <div>Friends</div>
    </div>
  );
};
export default Sidebar;
