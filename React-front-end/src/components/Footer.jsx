import Clock from "./Clock";

const Footer = () => {
    return (
        <div className="bg-white flex-center-between w-full  px-2">
            <div className=" px-3 flex justify-center items-center mb-[30px] lg:mb-0">
                <img
                    className="lg:h-[50px] h-[30px]"
                    src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
                    alt=""
                />
            </div>
            <div className=" flex justify-center items-center text-black mb-[30px] lg:mb-0">
                © copyright
            </div>
            <div className="px-4 flex justify-center items-center">
                <Clock />
            </div>
        </div>
    );
};

export default Footer;
