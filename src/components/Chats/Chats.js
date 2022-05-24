import React from "react";
import style from "./Chats.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Chats = (props) => {
  const chats = props.state.chatsData.map((chat) => {
    return <Chat id={chat.id} name={chat.userName} key={chat.id} />;
  });
  const messages = props.state.messagesData.map((message) => {
    return (
      <Message
        id={message.id}
        messageText={message.messageText}
        key={message.id}
      />
    );
  });

  const sendMessage = () => {
    props.sendMessage();
  };

  const updateMessageText = (e) => {
    let text = e.target.value;
    props.updateMessageText(text);
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
          onChange={updateMessageText}
          value={props.state.newMessageText}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Chats;
