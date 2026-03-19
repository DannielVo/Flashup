import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import ChatWindowFooter from "./ChatWindowFooter";
import { useState } from "react";
import { LIST_CHATS } from "../../assets/dummyDB";
import ChatInfoPanel from "./ChatInfoPanel";

const ChatWindowLayout = ({ selectedChatId, setIsChatOpen }) => {
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);

  const chat = LIST_CHATS.find((c) => c.id === selectedChatId);

  return (
    <>
      <ChatWindowHeader
        selectedChatId={selectedChatId}
        setIsChatOpen={setIsChatOpen}
        onOpenInfoPanel={() => setIsInfoPanelOpen(true)}
      />
      <ChatWindowBody selectedChatId={selectedChatId} />

      {/* CHAT INFO PANEL */}
      {isInfoPanelOpen && (
        <ChatInfoPanel chat={chat} onClose={() => setIsInfoPanelOpen(false)} />
      )}

      <ChatWindowFooter />
    </>
  );
};

export default ChatWindowLayout;
