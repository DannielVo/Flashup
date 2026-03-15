import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import useMobileNav from "../hooks/useMobileNav";
import MobileSidebarOverlay from "../components/sidebar/MobileSidebarOverlay";
import ChatWindowLayout from "../components/chat/ChatWindowLayout";
import AddGroupModal from "../components/group/AddGroupModal";

const MainLayout = () => {
  const { isMobileNavOpen, toggleMobileNav, closeMobileNav } = useMobileNav();
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden text-slate-800">
      {/* SIDEBAR */}
      <Sidebar />

      {/* SUB-SIDEBAR */}
      <div
        className={`${isChatOpen ? "hidden" : "flex"} lg:flex flex-1 flex-col lg:w-80 lg:flex-0 bg-white`}
      >
        <Outlet
          context={{
            isMobileNavOpen,
            toggleMobileNav,
            closeMobileNav,
            selectedChatId,
            setSelectedChatId,
            setIsChatOpen,
            setActiveModal,
          }}
        />
      </div>

      {/* CHATWINDOW */}
      <div
        className={`${isChatOpen ? "flex" : "hidden"} lg:flex flex-1 flex-col bg-background-light`}
      >
        <ChatWindowLayout
          selectedChatId={selectedChatId}
          setIsChatOpen={setIsChatOpen}
        />
      </div>

      {/* SIDEBAR FOR TABLET + MOBILE */}
      <MobileSidebarOverlay isOpen={isMobileNavOpen} onClose={closeMobileNav} />

      {/* ============= MODAL ============= */}

      {/* ADD GROUP MODAL */}
      <AddGroupModal
        isOpen={activeModal === "add-group"}
        onClose={() => setActiveModal(null)}
      />

      {/* *CÁC MODAL DƯỚI ĐÂY LÀM TƯƠNG TỰ ADD GROUP MODAL* */}

      {/* ADD CONTACT MODAL */}

      {/* PROFILE MODAL */}

      {/* CHANGE PASSWORD MODAL */}

      {/* {activeModal === "add-group" && (
        <AddGroupModal onClose={() => setActiveModal(null)} />
      )} */}
    </div>
  );
};

export default MainLayout;
