import { CURRENT_USER_ID, LIST_CHATS, MESSAGES } from "../../assets/dummyDB";
import MessageBubble from "./MessageBubble";

const ChatWindowBody = ({ selectedChatId }) => {
  const messages = MESSAGES[selectedChatId] || [];

  const selectedChat = LIST_CHATS.find((chat) => chat.id === selectedChatId);

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          type={msg.type}
          message={msg}
          isOwner={msg.senderId === CURRENT_USER_ID}
          chat={selectedChat}
        />
      ))}
    </div>
  );
};

export default ChatWindowBody;
