import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.user.userProfile);

  return (
    <div className="bg-white py-0.5 relative">
      <div className="flex-center-between max-w-[1320px] mx-auto pr-32">
        <div className="px-4">
          <img className="w-20 " src="/system_logo_.png" alt="" />
        </div>
        <div className="flex items-center space-x-8 px-4 py-1">
          <Link to="/">
            <div className="p-1">
              <AiTwotoneHome size={25} className="text-[#cc3333]" />
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <UserMenu />
            <p>{user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
