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
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    // this function is just for "observer" in rerenderer function
  },
  addPost() {
    let newPost = {
      id: 2,
      text: this._state.profilePage.newPostText,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  sendMessage() {
    let newMessage = {
      id: 2,
      messageText: this._state.chatsPage.newMessageText,
    };
    this._state.chatsPage.messagesData.push(newMessage);
    this._state.chatsPage.newMessageText = "";
    this._rerenderEntireTree(this._state);
  },
  updateMessageText(newText) {
    this._state.chatsPage.newMessageText = newText;
    this._rerenderEntireTree(this._state);
  },
  rerenderer(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
