import React from "react";

const ChatInfoPanel = ({ chat, onClose }) => {
  if (!chat) {
    return null;
  }

  return (
    <div
      className="absolute top-0 right-0 h-full w-80 bg-white border-l border-slate-200 shadow-xl z-20 flex flex-col
      transform transition-transform duration-300 ease-in-out"
    >
      {/* <!-- Header --> */}
      <div className="h-20 shrink-0 px-6 flex items-center justify-between border-b border-slate-100 ">
        <h2 className="font-bold text-slate-900 ">Chat Information</h2>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* <!-- User Info --> */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <img
              alt="Alex Rivera"
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-50  shadow-sm"
              src={chat.avatar ? `${chat.avatar}` : `${chat.initials}`}
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white  rounded-full"></span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 ">{chat.name}</h3>
          <p className="text-sm text-slate-500">alex.rivera@example.com</p>
        </div>
        {/* <!-- Shared Images --> */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Shared Images
          </h4>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-slate-100  rounded-lg overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDghbYHq_wAUBu8osvG4oonLSq7lFX3br7EYGRV6BpI_wEZVHT1S_Ubv0CVyO_61U6nI66d4G6_trk4uCGNMlL_MZQ8CDxFCQBpgvcVS-5BEHTExCBsl6bGxn0HMqsw7Am4d04udrkNTcjlX1JJtzWFXdFzN9v2lK7Fl7UEHPYJqGjc4vHD9ATSzVPZs-l2bMfZPzm3RDQ54V7ke5uqk1i36YqOs7aMgj2TtoiI53r7MGKQRUC1EK0xn7-fQvlwT6dGEAE-wg-pcawv"
              ></img>
            </div>
            <div className="aspect-square bg-slate-100  rounded-lg overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgK1AqLE1zf2sic8e4Q9l9Zkl0E18EO6ZtzENodCH94KkMt5xSihWVW9T_Lu4JsqQq1v9EweoYRgs2wW-VpvTVwIKPXu0zbdKGuFllKTKz11BQFfT87ORa2qqoaXDMeJQNWdUOkwZknopNNs9vGM5fMZzh2GqWP4BVo0GbsKx8P91PEu6nV9WcqwzndWDAigqW4PKbblYKEkLLZSp--PH5wEFTyUU6zUgTQE1jdMolIZPnHbj9lPjnF_zlp-FjcH6Q_wKNjEug-l1z"
              />
            </div>
            <div className="aspect-square bg-slate-100  rounded-lg flex items-center justify-center text-slate-400 text-xs font-medium cursor-pointer">
              +12
            </div>
          </div>
        </div>
        {/* <!-- Shared Links --> */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Shared Links
          </h4>
          <div className="space-y-3">
            <a className="block group" href="#">
              <p className="text-sm font-medium text-slate-700  group-hover:text-primary transition-colors">
                Design System Documentation
              </p>
              <p className="text-xs text-slate-400 truncate">
                docs.figma.com/design-system...
              </p>
            </a>
            <a className="block group" href="#">
              <p className="text-sm font-medium text-slate-700  group-hover:text-primary transition-colors">
                Q4 Project Roadmap
              </p>
              <p className="text-xs text-slate-400 truncate">
                notion.so/project/roadmap-v2
              </p>
            </a>
          </div>
        </div>
        {/* <!-- Shared Files --> */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Shared Files
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 ">
              <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">
                  description
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900  truncate">
                  Dashboard_V2_Draft.fig
                </p>
                <p className="text-[10px] text-slate-500">4.2 MB</p>
              </div>
              <button className="text-slate-400 hover:text-primary cursor-pointer">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
              </button>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 ">
              <div className="w-8 h-8 bg-red-50 rounded flex items-center justify-center text-red-500">
                <span className="material-symbols-outlined text-lg">
                  picture_as_pdf
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900  truncate">
                  Contract_Final.pdf
                </p>
                <p className="text-[10px] text-slate-500">1.8 MB</p>
              </div>
              <button className="text-slate-400 hover:text-primary cursor-pointer">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInfoPanel;
