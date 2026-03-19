import { useState } from "react";
import { CURRENT_USER_ID, LIST_CHATS, MESSAGES } from "../../assets/dummyDB";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const ChatWindowBody = ({ selectedChatId }) => {
  const [isTyping, setIsTyping] = useState(true); // Cần dựa vào state websocket

  const messages = MESSAGES[selectedChatId] || [];
  const selectedChat = LIST_CHATS.find((chat) => chat.id === selectedChatId);

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">
      {messages.map((msg, index) => {
        const prevMsg = messages[index - 1];
        const isShowDate = !prevMsg || prevMsg.date !== msg.date; // createdAt

        return (
          <div key={`msg-${msg.id}`}>
            {isShowDate && (
              <div className="flex justify-center mb-3">
                <span className="bg-slate-200/50 text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {msg.date}
                </span>
              </div>
            )}

            <MessageBubble
              key={msg.id}
              type={msg.type}
              message={msg}
              isOwner={msg.senderId === CURRENT_USER_ID}
              chat={selectedChat}
            />
          </div>
        );
      })}

      {isTyping && <TypingIndicator chat={selectedChat} />}
    </div>
  );
};

export default ChatWindowBody;
