import React from "react";
import style from "./Chat.module.css";
import { NavLink } from "react-router-dom";

const Chat = (props) => {
  const isActive = () => {
    return (currentChat) =>
      currentChat.isActive ? style.active : style.dialog;
  };
  let path = "/chats/" + props.id;
  return (
    <NavLink className={isActive()} to={path}>
      {props.name}
    </NavLink>
  );
};
export default Chat;
