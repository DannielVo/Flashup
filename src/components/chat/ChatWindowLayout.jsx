import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import ChatWindowFooter from "./ChatWindowFooter";

const ChatWindowLayout = ({ selectedChatId, setIsChatOpen }) => {
  return (
    <>
      <ChatWindowHeader
        selectedChatId={selectedChatId}
        setIsChatOpen={setIsChatOpen}
      />
      <ChatWindowBody selectedChatId={selectedChatId} />
      <ChatWindowFooter />
    </>
  );
};

export default ChatWindowLayout;
