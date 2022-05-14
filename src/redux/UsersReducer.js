const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
// const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
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
        usersData: action.usersData,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    // case SET_TOTAL_USERS_COUNT:
    //   return {
    //     ...state,
    //     totalUsersCount: action.totalCount,
    //   };
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
export const setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
// export const setTotalUsersCountAC = (totalCount) => {
//   return { type: SET_TOTAL_USERS_COUNT, totalCount };
// };
export default UsersReducer;
