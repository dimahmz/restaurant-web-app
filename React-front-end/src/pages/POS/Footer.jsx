import Clock from "../../PosComponents/Clock";

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full">
            <div className="bg-white  w-full lg:flex justify-center items-center   lg:justify-between">
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
        </div>
    );
};

export default Footer;
