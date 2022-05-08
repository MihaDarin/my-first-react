import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./ProfileReducer";
import chatsReducer from "./ChatsReducer";
let reducers = combineReducers({
  chatsPage: chatsReducer,
  profilePage: profileReducer,
});

let store = legacy_createStore(reducers);

export default store;
