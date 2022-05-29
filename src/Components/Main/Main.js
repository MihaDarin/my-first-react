import React from "react";
import style from "./Main.module.css";
import Profile from "../Profile/Profile";
import Chats from "../Chats/Chats";
import { Route, Routes } from "react-router-dom";
import News from "../News/News";
const MainContent = () => {
  return (
    <div className={style.content_wrapper}>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default MainContent;
