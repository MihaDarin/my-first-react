import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./ProfileReducer";
import chatsReducer from "./ChatsReducer";
import UsersReducer from "./UsersReducer";
let reducers = combineReducers({
  chatsPage: chatsReducer,
  profilePage: profileReducer,
  usersPage: UsersReducer,
});

let store = legacy_createStore(reducers);

window.store = store;
export default store;
