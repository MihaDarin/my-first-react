import React from "react";
import style from "./Chats.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Chats = (props) => {
  const chats = props.state.usersData.map((chat) => {
    return <Chat id={chat.id} name={chat.userName} />;
  });
  const messages = props.state.messagesData.map((message) => {
    return <Message id={message.id} messageText={message.messageText} />;
  });

  let newMessage = React.createRef();

  const sendMessage = () => {
    props.dispatch({ type: "SEND-MESSAGE" });
  };

  const updateMessageText = () => {
    let text = newMessage.current.value;
    props.dispatch({ type: "UPDATE-MESSAGE-TEXT", newText: text });
  };
  return (
    <div className={style.chats}>
      <div className={style.chats_items}>{chats}</div>
      <div>
        <div>{messages}</div>
      </div>
      <div className={style.chats_items}>
        <textarea
          placeholder="Message Text"
          ref={newMessage}
          onChange={updateMessageText}
          value={props.state.newMessageText}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Chats;
