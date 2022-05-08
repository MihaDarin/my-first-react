import React from "react";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/ChatsReducer";
import Chats from "./Chats";

const ChatsContainer = (props) => {
  let state = props.store.getState();
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const updateMessageText = (text) => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  };
  return (
    <div>
      <Chats
        sendMessage={sendMessage}
        updateMessageText={updateMessageText}
        state={state.chatsPage}
      />
    </div>
  );
};

export default ChatsContainer;
