import { Outlet, Link } from "react-router-dom";
import Drawer from "../../components/layout/Drawer";
const MainLayoutContainer = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" drawer-content flex flex-col">
          <Outlet />
        </div>
        <Drawer />
      </div>
    </div>
  );
};

export default MainLayoutContainer;
