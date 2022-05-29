import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={style.content_wrapper}>
      <div className={style.links}>
        <NavLink className={style.link} to="/profile">
          Profile
        </NavLink>
        <NavLink className={style.link} to="/chats">
          Chats
        </NavLink>
        <NavLink className={style.link} to="/news">
          News
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
