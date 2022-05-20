const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const IS_FETCHING = "IS-FETCHNG";
let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: false,
};
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, follow: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, follow: false };
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
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsers = (usersData) => {
  return { type: SET_USERS, usersData };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setIsFetching = (isFetching) => {
  return { type: IS_FETCHING, isFetching };
};
export default UsersReducer;
