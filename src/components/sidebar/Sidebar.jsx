import React from "react";
import { assets, sidebarItems } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div className="hidden lg:flex w-20 flex-col py-8 items-center border-r border-slate-200 z-20 bg-white">
      {/* Logo */}
      <div className="mb-10">
        <img
          src={assets.mainLogo}
          alt="Flashup's Logo"
          className="w-12 h-12 object-cover"
        />
      </div>

      {/* Sidebar tabs */}
      <div className="flex flex-col gap-6 flex-1">
        {sidebarItems.map((item) => (
          <NavLink
            key={`sidebar-item-${item.id}`}
            to={item.path}
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-xl ${isActive ? "bg-primary/10 text-primary" : "text-slate-400 hover:bg-primary/10 hover:text-primary"} transition-all duration-300 cursor-pointer`
            }
            title={item.title}
          >
            <span className="material-symbols-outlined active-icon">
              {item.icon}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        title="Logout"
        className="w-12 h-12 flex justify-center items-center rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-100 transition-all duration-300 cursor-pointer"
      >
        <span className="material-symbols-outlined">logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
