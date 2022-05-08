const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  profilePage: {
    postsData: [
      { id: 0, text: "It is a first post" },
      { id: 1, text: "It is a second post" },
    ],
    newPostText: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 2,
        text: state.profilePage.newPostText,
      };
      state.profilePage.postsData.push(newPost);
      state.profilePage.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.profilePage.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const changePostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export default profileReducer;
