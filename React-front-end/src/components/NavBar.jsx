import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="bg-white py-0.5">
      <div className="flex-center-between max-w-[1320px] mx-auto">
        <div className="px-4">
          <img
            className="max-h-[38px]"
            src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
            alt=""
          />
        </div>
        <div className="w-1/5 flex items-center px-4">
          <Link to="/">
            <div className="p-1 mr-4">
              <AiTwotoneHome size={25} className="text-[#cc3333]" />
            </div>
          </Link>

          <div className="flex items-center gap-1 p-2 mr-4 ">
            <UserMenu />
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
