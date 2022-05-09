import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import ChatsContainer from "./components/Chats/ChatsContainer";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats/*" element={<ChatsContainer />} />
        {/* <News />
      <Music />
      <Settings />
      <Friends /> */}
      </Routes>
    </div>
  );
}

export default App;
