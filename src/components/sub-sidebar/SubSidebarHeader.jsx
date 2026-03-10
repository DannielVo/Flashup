import { useOutletContext } from "react-router-dom";

const SubSidebarHeader = ({ title, content, actions }) => {
  const { toggleMobileNav } = useOutletContext();

  return (
    <div className="p-5 mb-2">
      <div className="flex items-center justify-between mb-6">
        {/* <!-- Title --> */}
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>

        {/* <!-- Right actions --> */}
        <div className="flex items-center gap-2">
          {/* <!-- slot actions --> */}
          {actions}

          {/* <!-- hamburger --> */}
          <button
            onClick={toggleMobileNav}
            className="lg:hidden flex items-center justify-center rounded-lg hover:bg-slate-200 transition"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* <!-- optional content (search, tabs...) --> */}
      {content}
    </div>
  );
};

export default SubSidebarHeader;
