import React from "react";

const ChatItem = ({ chat, onSelect, active }) => {
  return (
    <div
      onClick={() => onSelect(chat.id)}
      className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border border-transparent ${active ? `bg-slate-100` : `hover:bg-slate-100`}`}
    >
      <div className="relative shrink-0">
        {chat.avatar ? (
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={chat.avatar}
          />
        ) : (
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={chat.initials}
          />
        )}

        {chat.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h3 className="font-semibold text-slate-900 truncate">{chat.name}</h3>
          <span className="text-xs text-slate-400">{chat.time}</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-slate-500 truncate">{chat.message}</p>

          {chat.unread > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
