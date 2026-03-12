import React from "react";

const ChatWindowFooter = () => {
  return (
    <div className="p-4 bg-white border-t border-slate-200">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">mood</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">attach_file</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">image</span>
          </button>
        </div>
        <div className="flex-1 relative">
          <textarea
            className="w-full bg-slate-100 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary outline-none resize-none placeholder:text-slate-500 text-slate-900"
            placeholder="Enter message..."
            rows="1"
          ></textarea>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95 shrink-0 cursor-pointer">
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
};

export default ChatWindowFooter;
