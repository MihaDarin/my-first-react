import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./ProfileReducer";
import chatsReducer from "./ChatsReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
let reducers = combineReducers({
  chatsPage: chatsReducer,
  profilePage: profileReducer,
  usersPage: UsersReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
