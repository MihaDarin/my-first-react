import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/ReduxStore";
import StoreContext from "./StoreContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderPage = () => {
  root.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  );
};

rerenderPage(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderPage(state);
});
