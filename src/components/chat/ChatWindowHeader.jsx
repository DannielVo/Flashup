import React, { useState } from "react";
import { LIST_CHATS } from "../../assets/dummyDB";

const ChatWindowHeader = ({
  selectedChatId,
  setIsChatOpen,
  onOpenInfoPanel,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const chat = LIST_CHATS.find((c) => c.id === selectedChatId);
  const userNameWords = chat.name.trim().split(" ");
  const displayName = userNameWords.length >= 3 ? userNameWords[0] : chat.name;

  return (
    <div className="h-20 shrink-0 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsChatOpen(false)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="relative">
          <img
            className="w-11 h-11 rounded-full object-cover"
            data-alt="User profile detail view"
            src={chat.avatar ? `${chat.avatar}` : `${chat.initials}`}
          />
          {chat.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>
        <div>
          <h2 className="max-w-45 font-bold text-slate-900 leading-tight mb-0.5">
            {displayName}
          </h2>
          <div className="flex items-center gap-1.5">
            {chat.online ? (
              <>
                <span className="text-xs text-slate-500 font-medium">
                  Online
                </span>
              </>
            ) : (
              <>
                <span className="text-xs text-slate-500 font-medium">
                  Offline
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">call</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">videocam</span>
        </button>
        <button
          onClick={onOpenInfoPanel}
          className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">info</span>
        </button>

        <div className="relative group">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">more_vert</span>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50">
              {!chat.isGroup && (
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors text-left cursor-pointer">
                  <span className="material-symbols-outlined text-lg">
                    delete
                  </span>
                  <span className="font-medium">Delete Chat</span>
                </button>
              )}

              {chat.isGroup && (
                <>
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 text-left cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                      person_add
                    </span>
                    <span>Add Member</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 text-left cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                      logout
                    </span>
                    <span>Leave Group</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 text-left cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                    <span>Dissolve Group</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindowHeader;
