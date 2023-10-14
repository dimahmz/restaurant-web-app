import Clock from "./Clock";

const Footer = () => {
  return (
    <div className="flex-center-between max-w-[1320px] mx-auto px-2">
      <div className=" px-3 flex justify-center items-center lg:mb-0">
        <img
          className="lg:h-[50px] h-[30px]"
          src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
          alt=""
        />
      </div>
      <div className=" flex justify-center items-center text-black lg:mb-0">
        © copyright
      </div>
      <div className="px-4 flex justify-center items-center">
        <Clock />
      </div>
    </div>
  );
};

export default Footer;
