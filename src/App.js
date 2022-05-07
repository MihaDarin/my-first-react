import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Chats from "./components/Chats/Chats";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              state={props.store.getState().profilePage}
              dispatch={props.store.dispatch.bind(props.store)}
            />
          }
        />
        <Route
          path="/chats/*"
          element={
            <Chats
              state={props.store.getState().chatsPage}
              dispatch={props.store.dispatch.bind(props.store)}
            />
          }
        />
        {/* <News />
      <Music />
      <Settings />
      <Friends /> */}
      </Routes>
    </div>
  );
}

export default App;
