import React from "react";
import style from "./Message.module.css";
const Message = (props) => {
  return <div className={style.item}>{props.messageText}</div>;
};

export default Message;
