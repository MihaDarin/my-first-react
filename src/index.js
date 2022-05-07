import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderPage = () => {
  root.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  );
};

rerenderPage(store.getState());

store.rerenderer(rerenderPage);
