import React from "react";
import SubSidebarHeader from "../../components/sub-sidebar/SubSidebarHeader";
import { LIST_CHATS } from "../../assets/dummyDB";
import { useOutletContext } from "react-router-dom";
import ChatItem from "../../components/chat/ChatItem";

const Chats = () => {
  const { selectedChatId, setSelectedChatId, setIsChatOpen } =
    useOutletContext();

  return (
    <>
      <SubSidebarHeader
        title={"Chats"}
        content={
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              search
            </span>
            <input
              className="w-full bg-slate-100 border-none rounded-lg py-2.5 pl-10 pr-4 text-sm placeholder:text-slate-500 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
              placeholder="Search conversations..."
              type="text"
            />
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto px-2 pb-6 space-y-1">
        {LIST_CHATS.map((chat) => (
          <ChatItem
            key={`chat-item-${chat.id}`}
            chat={chat}
            onSelect={(id) => {
              setSelectedChatId(id);
              setIsChatOpen(true);
            }}
            active={chat.id === selectedChatId}
          />
        ))}
      </div>
    </>
  );
};

export default Chats;
