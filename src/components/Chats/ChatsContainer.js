import React from "react";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/ChatsReducer";
import Chats from "./Chats";
import StoreContext from "../../StoreContext";

const ChatsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };
        const updateMessageText = (text) => {
          store.dispatch(updateMessageTextActionCreator(text));
        };
        return (
          <Chats
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
            state={state.chatsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default ChatsContainer;
