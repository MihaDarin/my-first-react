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
              state={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          }
        />
        <Route
          path="/chats"
          element={
            <Chats
              state={props.state.chatsPage}
              sendMessage={props.sendMessage}
              updateMessageText={props.updateMessageText}
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
