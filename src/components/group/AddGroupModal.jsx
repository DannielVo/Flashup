const AddGroupModal = ({ isOpen, onClose }) => {
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
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Suggested Friends
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                alt="User"
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnXhNAqASZSRl4KMa_GQ9_7qjyNf0CtVpomVkO1mulKN7KeuZ9a4lUdaqxeEnDNJGmOIT-d9corB8xIBE6kGN4ayBydkO5siB_JwwY6UPicZUAJc8Y_LWovUisRF25iqoekyOLcepSITFvY98Dp2hrGCcBMx47lNrjy2jmhYs14kPWB1wKennc9wNzpz3oYJyo4Bcz9vNOGwTE2OoiTDmlvhfCP1Djgj9C4Lf6iBGTtPM4DGJ6bBmETskAwIMHj34NamGyrEpkDim2"
              />
              <span className="font-medium text-slate-900 ">Alex Rivera</span>
            </div>
            <input
              className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
              type="checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                alt="User"
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv92mOTg4uqLOaBJyZvqzIWBTRts6i72t_mf_TB4apXqwoxlMK1zOh0GEwroP1FwTNZt9SYKSlJrGEsSpbesWDIZ8ZiDBNHjWMdHhfkygvqDenJAu_usq2Wc-ZWijzymYPHVIwRPsH_SOcBm11xT5kxD3ZnT5uWeV2c0-XbJSueeBSpi5eLQiYpEdje81XvajoTyG51Q2P5cSgazxd9EmRk_MhyltqLBgU673d0juOIXaqj22XVytH91nxoMPSupvTwoMowz5YJSDQ"
              />
              <span className="font-medium text-slate-900 ">Sarah Jenkins</span>
            </div>
            <input
              className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
              type="checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                alt="User"
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByaAUl9VaP98wZMS4x6rIDPTNssV0tWvCa36a_sg9HP-6zXVu4lkKky0DP47BLLHK--A1EQY2B4aGrYx-1Qrua2HJG4JaOrtYw10jLGt6ZnT_3__fnRpuQ_fAhzpWMx9zgFhmUQ6xeFmIBbWULCH23WeeI9blsBR4fkGHe7MaP4cr0kSOia-KrC_eXVB5CqhegPE4Ip7McQmyATpniHZyflIhDpKcdLTEFfCIceHgIy6Ly30q90DpiZKeQnY-_700OGpyoJuI4NRBj"
              />
              <span className="font-medium text-slate-900 ">Marcus Chen</span>
            </div>
            <input
              className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
              type="checkbox"
            />
          </div>
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
