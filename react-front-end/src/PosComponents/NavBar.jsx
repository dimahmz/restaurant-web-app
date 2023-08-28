import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import DropDown3 from "./DropDown3";
import UserDropDown from "./UserDropDown";
const NavBar = () => {
    const languageOptions = [
        { value: "en", label: "English" },
        { value: "fr", label: "Français" },
        { value: "es", label: "Español" },
        { value: "de", label: "Deutsch" },
    ];
    const CoinOptions = [
        { value: "dh", label: "DH" },
        { value: "$", label: "Dollar US" },
    ];
    return (
        <div className="  h-[50px] bg-white ">
            <div className="flex justify-between max-w-[1320px] m-auto">
                <div className="px-4">
                    <img
                        className="h-[50px]"
                        src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
                        alt=""
                    />
                </div>
                <div className="flex px-4">
                    <a href="/">
                        <div className="p-2 mr-4">
                            <AiTwotoneHome
                                size={25}
                                className="text-[#cc3333]"
                            />
                        </div>
                    </a>
                    <div className="mr-4 flex gap-1 p-2">
                        <img
                            className=" h-8 rounded-full"
                            src="https://khadyo.softtechdemo.com/public//images/flags/default.png"
                            alt=""
                        />

                        <DropDown3
                            options={languageOptions}
                            defaultValue="en"
                        />
                    </div>
                    <div className="mr-4 flex gap-1 p-2">
                        <div className="p-2 flex h-8 w-8 justify-center items-center rounded-full bg-purple-600 text-white">
                            $
                        </div>

                        <DropDown3 options={CoinOptions} defaultValue="$" />
                    </div>
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
