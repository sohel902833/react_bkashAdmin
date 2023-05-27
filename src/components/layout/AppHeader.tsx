import { AiOutlineMenu } from "react-icons/ai";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
interface Props {
  title: string;
}

const AppHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      <section className="p-4 shadow-lg fixed left-0 lg:left-[20rem] right-0 top-0 flex justify-between">
        <div className="flex items-center gap-2">
          {" "}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline drawer-button lg:hidden cursor-pointer"
          >
            <AiOutlineMenu size={14} />
          </label>
          <h2>{title}</h2>
        </div>
        <Link to="/">
          <img className="h-[30px] w-[30px] " src={assets.imgBkashLogo} />
        </Link>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};

export default AppHeader;
