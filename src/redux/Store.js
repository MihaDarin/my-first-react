import chatsReducer from "./ChatsReducer";
import profileReducer from "./ProfileReducer";

let store = {
  _state: {
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
    profilePage: {
      postsData: [
        { id: 0, text: "It is a first post" },
        { id: 1, text: "It is a second post" },
      ],
      newPostText: "",
    },

    // friendsData: [
    //   { id: 0, name: "Avocado" },
    //   { id: 1, name: "Lisa" },
    //   { id: 2, name: "Gaspar" },
    // ],
  },
  _rerenderEntireTree() {
    // this function is just for "observer" in rerenderer function
  },
  getState() {
    return this._state;
  },

  rerenderer(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.chatsPage = chatsReducer(this._state.chatsPage, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
