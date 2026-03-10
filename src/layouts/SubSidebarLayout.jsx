import { Outlet, useOutletContext } from "react-router-dom";

const SubSidebarLayout = () => {
  const outletContext = useOutletContext();

  return (
    <div className="h-full flex flex-col">
      <Outlet context={outletContext} />
    </div>
  );
};

export default SubSidebarLayout;
