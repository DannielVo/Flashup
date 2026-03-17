import React from "react";

const TypingIndicator = ({ chat }) => {
  return (
    <div class="flex items-start gap-3">
      <img
        class="w-8 h-8 rounded-full shrink-0"
        data-alt="Typing user avatar"
        src={chat.avatar ? `${chat.avatar}` : `${chat.initials}`}
      />
      <div class="bg-slate-200/50 p-3 rounded-full flex gap-1 items-center px-4">
        <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></div>
        <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
        <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
