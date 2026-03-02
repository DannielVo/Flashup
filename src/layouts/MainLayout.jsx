import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import ChatWindow from "../components/chat/ChatWindow";

const MainLayout = () => {
  return (
    <div className="flex bg-background-light h-screen overflow-hidden text-slate-800">
      <Sidebar />
      <Outlet />
      <ChatWindow />
    </div>
  );
};

export default MainLayout;
