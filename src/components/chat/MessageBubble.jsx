import React from "react";
import { assets } from "../../assets/assets";

const MessageBubble = ({ type, message, isOwner, chat }) => {
  const containerClass = isOwner
    ? "flex justify-end"
    : "flex items-start gap-3 max-w-[70%]";

  const renderStatusIcon = (status) => {
    switch (status) {
      case "sending":
        return (
          <span className="material-symbols-outlined text-[14px] text-slate-400">
            schedule
          </span>
        );

      case "sent":
        return (
          <span className="material-symbols-outlined text-[14px] text-slate-400">
            done
          </span>
        );

      case "seen":
        return (
          <span className="material-symbols-outlined text-[14px] text-primary">
            done_all
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className={containerClass}>
        {!isOwner && (
          <img
            className="w-8 h-8 rounded-full shrink-0"
            src={chat.avatar ? `${chat.avatar}` : `${chat.initials}`}
          />
        )}

        <div className={isOwner ? "max-w-[70%] text-right" : ""}>
          {/* TEXT */}
          {type === "text" && (
            <div
              className={`p-4 rounded-xl text-sm outline-none ${
                isOwner ? "bg-primary text-white" : "bg-white"
              }`}
            >
              {message.content}
            </div>
          )}

          {/* IMAGE */}
          {type === "image" && (
            <div className="overflow-hidden rounded-xl shadow-sm cursor-pointer bg-black/50">
              <div className="relative w-72 h-48">
                <img
                  src={message.images[0]}
                  className="w-full h-full object-cover opacity-60"
                />

                {message.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">
                      +{message.images.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FILE */}
          {type === "file" && (
            <div className="bg-white p-3 rounded-xl flex items-center gap-3 w-64">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500">
                <span className="material-symbols-outlined">
                  picture_as_pdf
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate">
                  {message.fileName}
                </p>
                <p className="text-[10px] text-slate-500">{message.fileSize}</p>
              </div>

              <button className="text-slate-400 hover:text-primary cursor-pointer">
                <span className="material-symbols-outlined text-xl">
                  download
                </span>
              </button>
            </div>
          )}

          {/* SENT TIME AND SEEN STATUS */}
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="text-[10px] text-slate-400 mt-1 inline-block">
              {message.time}
            </span>
            {isOwner && renderStatusIcon(message.status)}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBubble;
