import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  let activeLink = () => {
    return (sideData) => (sideData.isActive ? style.active : style.item);
  };
  return (
    <div className={style.sidebar}>
      <div>
        <NavLink to="/profile" className={activeLink()}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/chats" className={activeLink()}>
          Chats
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={activeLink()}>
          Users
        </NavLink>
      </div>
      {/* <div>
        <NavLink to="/news" className={activeLink()}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={activeLink()}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={activeLink()}>
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink to="/friends" className={activeLink()}>
          Friends
        </NavLink>
      </div> */}
    </div>
  );
};
export default Sidebar;
