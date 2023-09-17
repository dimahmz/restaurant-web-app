import { AiTwotoneHome } from "react-icons/ai";
import UserDropDown from "../PosComponents/UserDropDown";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-white py-1">
            <div className="flex justify-between max-w-[1320px] m-auto">
                <div className="px-4">
                    <img
                        className="h-[50px]"
                        src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
                        alt=""
                    />
                </div>
                <div className="flex px-4">
                    <Link to="/">
                        <div className="p-2 mr-4">
                            <AiTwotoneHome
                                size={25}
                                className="text-[#cc3333]"
                            />
                        </div>
                    </Link>

                    <div className="mr-4 flex gap-1 p-2">
                        <img
                            className=" h-8 rounded-full shadow-lg "
                            src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                            alt=""
                        />
                        <UserDropDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
