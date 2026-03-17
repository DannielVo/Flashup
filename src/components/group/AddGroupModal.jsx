import { useEffect, useState } from "react";
import { LIST_CHATS } from "../../assets/dummyDB";

const AddGroupModal = ({ isOpen, onClose }) => {
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const INITIAL_COUNT = 5;

  const filterUsers = LIST_CHATS.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const firstUsers = LIST_CHATS.slice(0, INITIAL_COUNT);
    setVisibleUsers(firstUsers);
    setPage(1);
    setHasMore(LIST_CHATS.length > INITIAL_COUNT);
  }, []);

  const userToShow = search.trim() ? filterUsers : visibleUsers;

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    const isBottom = scrollHeight - scrollTop <= clientHeight + 10;

    if (isBottom && hasMore) {
      loadMoreUsers();
    }
  };

  const loadMoreUsers = () => {
    const nextPage = page + 1;
    const nextUsers = LIST_CHATS.slice(0, nextPage * INITIAL_COUNT);

    setVisibleUsers(nextUsers);
    setPage(nextPage);

    if (nextUsers.length >= LIST_CHATS.length) {
      setHasMore(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transform transition-all duration-300 ease-out
        ${isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-2 opacity-0"}
      `}
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">
            Create Group Chat
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-4">
          <div className="relative mb-4">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              search
            </span>
            <input
              className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary outline-none"
              placeholder="Search friends..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-6 space-y-4 pb-6"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Suggested Friends
          </p>
          {userToShow.map((chat) => (
            <div
              key={`user-${chat.id}`}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  alt={chat.name}
                  className="w-10 h-10 rounded-full"
                  src={chat.avatar ? chat.avatar : chat.initials}
                />
                <span className="font-medium text-slate-900 ">{chat.name}</span>
              </div>
              <input
                className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                type="checkbox"
              />
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg text-sm font-semibold bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all cursor-pointer">
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGroupModal;
