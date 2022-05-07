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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 2,
        text: this._state.profilePage.newPostText,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      let newMessage = {
        id: 2,
        messageText: this._state.chatsPage.newMessageText,
      };
      this._state.chatsPage.messagesData.push(newMessage);
      this._state.chatsPage.newMessageText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
      this._state.chatsPage.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },
};

export default store;
