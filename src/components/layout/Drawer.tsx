import { Link, useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import { AUTH_TOKEN_KEY } from "../../lib/shared";
import { useDispatch } from "react-redux";
import { removeUserInfo } from "../../feature/auth/authSlice";
const sidebarList = [
  {
    id: 1,
    name: "Agents",
    route: "/agent-list",
  },
  {
    id: 2,
    name: "Users",
    route: "/users",
  },
  {
    id: 3,
    name: "Settings",
    route: "/settings",
  },
];

const Drawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    dispatch(removeUserInfo());
    window.location.reload();
  };
  return (
    <div className="drawer-side  border-r-primary border-r-2">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <Link to={"/"}>
            <img
              className="h-[100px] w-[100px]"
              src={assets.imgBkashLogo}
              alt="logo"
            />
          </Link>
        </li>
        {sidebarList?.map((item) => (
          <li key={item.id}>
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}

        <br />
        <br />
        <br />

        <li>
          <button onClick={handleLogout} className="btn btn-outline btn-error">
            <a>Logout</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
