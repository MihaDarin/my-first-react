import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatsContainer from "./components/Chats/ChatsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/profile/*" element={<ProfileContainer />} />
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
