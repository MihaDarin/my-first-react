import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import state from "./redux/State";
import { BrowserRouter } from "react-router-dom";
import {
  addPost,
  updateNewPostText,
  sendMessage,
  updateMessageText,
  rerenderer,
} from "./redux/State";
const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderPage = () => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        sendMessage={sendMessage}
        updateMessageText={updateMessageText}
      />
    </BrowserRouter>
  );
};

rerenderPage(state);

rerenderer(rerenderPage);
