import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./sidebar";
import Home from "./home";
import RightSideBar from "./right_side_bar";
import SearchUser from "./search_user";
import CreateBit from "./create_bit";
import Profile from "./profile";
import Post from "./post";
import Activity from "./activity";

function Main() {
  return (
    <div className="flex space-x-7 px-6">
      <SideBar />
      <div className="w-8/12 px-9 py-7 h-[calc(100vh-130px)] bg-dark1 overflow-auto no-scrollbar">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={SearchUser} />
          <Route path="/create" Component={CreateBit} />
          <Route path="/profile" Component={Profile} />
          <Route path="/post/:id" Component={Post} />
          <Route path="/activity" Component={Activity} />
        </Routes>
      </div>
      <RightSideBar />
    </div>
  );
}

export default Main;
