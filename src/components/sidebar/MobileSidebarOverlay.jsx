import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../assets/assets";

const MobileSidebarOverlay = ({ isOpen, onClose }) => {
  const handleLogout = () => {
    alert("Logging out...");
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8">
      {/* Close button */}
      <button onClick={onClose} className="absolute top-6 right-6 text-3xl">
        <span className="material-symbols-outlined">close</span>
      </button>

      {/* Sidebar items */}
      {sidebarItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          onClick={onClose}
          className="flex items-center text-xl text-slate-700"
        >
          {item.title}
        </NavLink>
      ))}
      <NavLink
        onClick={handleLogout}
        className="flex items-center text-xl text-slate-700"
      >
        Logout
      </NavLink>
    </div>
  );
};

export default MobileSidebarOverlay;
