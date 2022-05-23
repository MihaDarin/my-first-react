import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatsContainer from "./components/Chats/ChatsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Sidebar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:userId" element={<ProfileContainer />} />
        <Route path="/profile/*" element={<ProfileContainer />} />/
        <Route path="/chats/*" element={<ChatsContainer />} />
        <Route path="/users/" element={<UsersContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        {/* <Music />
      <Settings />
      <Friends /> */}
      </Routes>
    </div>
  );
}

export default App;
