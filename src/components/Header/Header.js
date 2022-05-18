import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.header}>
      Header
      <div className={style.login_block}>
        <NavLink to="/login"> Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
