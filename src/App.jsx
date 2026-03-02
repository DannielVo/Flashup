import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/404/NotFound";
import MainLayout from "./layouts/MainLayout";
import Chats from "./pages/chats/Chats";
import Groups from "./pages/groups/Groups";
import Contacts from "./pages/contacts/Contacts";
import Notifications from "./pages/notifications/Notifications";
import SubSidebarLayout from "./layouts/SubSidebarLayout";
import Settings from "./pages/settings/Settings";

const App = () => {
  return (
    <Routes>
      {/* AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* MAIN LAYOUT */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Chats />} />

        <Route element={<SubSidebarLayout />}>
          <Route path="chats" element={<Chats />} />
          <Route path="groups" element={<Groups />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
