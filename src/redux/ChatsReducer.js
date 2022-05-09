const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
  chatsPage: {
    usersData: [
      { id: 0, userName: "Stan" },
      { id: 1, userName: "Mango" },
    ],
    messagesData: [
      { id: 0, messageText: "Hi" },
      { id: 1, messageText: "I like coffee" },
    ],
    newMessageText: "",
  },
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 2,
        messageText: state.chatsPage.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.chatsPage.messagesData = [...stateCopy.chatsPage.messagesData];
      stateCopy.chatsPage.messagesData.push(newMessage);
      stateCopy.chatsPage.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.chatsPage.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateMessageTextActionCreator = (text) => {
  return { type: UPDATE_MESSAGE_TEXT, newText: text };
};
export default chatsReducer;
