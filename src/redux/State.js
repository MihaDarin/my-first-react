let rerenderEntireTree = () => {
  // this function is just for "observer" in rerenderer function
};
let state = {
  messagesPage: {
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
};

export let addPost = () => {
  let newPost = {
    id: 2,
    text: state.profilePage.newPostText,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree();
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};
export let sendMessage = () => {
  let newMessage = {
    id: 2,
    messageText: state.messagesPage.newMessageText,
  };
  state.messagesPage.messagesData.push(newMessage);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree();
};
export let updateMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  rerenderEntireTree();
};

export const rerenderer = (observer) => {
  rerenderEntireTree = observer;
};
export default state;
