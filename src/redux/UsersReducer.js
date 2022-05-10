const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let initialState = {
  usersData: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, follow: false };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, follow: true };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        usersData: [...state.usersData, ...action.usersData],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsersAC = (usersData) => {
  return { type: SET_USERS, usersData };
};

export default UsersReducer;
