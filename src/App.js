import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        {/* <News />
      <Music />
      <Settings />
      <Friends /> */}
      </Routes>
    </div>
  );
}

export default App;
