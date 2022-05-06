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
              state={props.store.state.profilePage}
              addPost={props.store.addPost}
              updateNewPostText={props.store.updateNewPostText}
            />
          }
        />
        <Route
          path="/chats/*"
          element={
            <Chats
              state={props.store.state.chatsPage}
              sendMessage={props.store.sendMessage}
              updateMessageText={props.store.updateMessageText}
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
