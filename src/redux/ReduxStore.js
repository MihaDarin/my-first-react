import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./ProfileReducer";
import chatsReducer from "./ChatsReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./auth-reducer";
let reducers = combineReducers({
  chatsPage: chatsReducer,
  profilePage: profileReducer,
  usersPage: UsersReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers);

window.store = store;
export default store;
