let rerenderEntireTree = () => {
  // this function is just for "observer" in rerenderer function
};
let store = {
  state: {
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

    friendsData: [
      { id: 0, name: "Avocado" },
      { id: 1, name: "Lisa" },
      { id: 2, name: "Gaspar" },
    ],
  },
  addPost() {
    let newPost = {
      id: 2,
      text: store.state.profilePage.newPostText,
    };
    store.state.profilePage.postsData.push(newPost);
    store.state.profilePage.newPostText = "";
    rerenderEntireTree();
  },
  updateNewPostText(newText) {
    store.state.profilePage.newPostText = newText;
    rerenderEntireTree();
  },
  sendMessage() {
    let newMessage = {
      id: 2,
      messageText: store.state.chatsPage.newMessageText,
    };
    store.state.chatsPage.messagesData.push(newMessage);
    store.state.chatsPage.newMessageText = "";
    rerenderEntireTree();
  },
  updateMessageText(newText) {
    store.state.chatsPage.newMessageText = newText;
    rerenderEntireTree();
  },
};

export default store;

export const rerenderer = (observer) => {
  rerenderEntireTree = observer;
};
