import React from "react";

const PopularComponent = ({ data }) => {
    return (
        <div id="popular" className="w-full bg-white relative">
            <div className="max-w-[1140px] m-auto px-4 bg-white">
                <h2 className="text-[#cc3333] font-serif text-center text-3xl">
                    Food Items
                </h2>
                <h1 className="text-[#2a435d] font-bold text-4xl text-center">
                    Popular <span className="text-[#cc3333]">Menu</span>
                </h1>
                <div className="flex justify-center">
                    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center p-4 mt-2">
                        {data.map((item, index) => (
                            <button
                                key={index}
                                className="hover:bg-[#cc3333] hover:text-white hover:bg-[url('https://khadyo.softtechdemo.com/website/images/shapes/14.png')] duration-300 font-bold border rounded border-solid w-[150px] h-[150px] p-4 m-4"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-4 pb-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        <div className=" flex border-2 h-[250px] w-[350px] py-4 px-2 rounded hover:shadow-lg hover:scale-105 duration-300">
                            <div className="mr-6 flex justify-center items-center w-[100px]">
                                {" "}
                                <img
                                    className=" rounded-full h-[60px] w-[100px]  flex"
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h1 className="text-lg font-bold text-[#2a435d]">
                                        Pizza Rida
                                    </h1>
                                    <h3 className="my-2 text-sm">
                                        Available Stock To check stock select
                                        branch after clicking this food
                                    </h3>
                                    <h2 className="text-lg font-bold text-[#2a435d]">
                                        12.00$
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=" flex border-2 h-[250px] w-[350px] py-4 px-2 rounded hover:shadow-lg hover:scale-105 duration-300">
                            <div className="mr-6 flex justify-center items-center w-[100px]">
                                {" "}
                                <img
                                    className=" rounded-full h-[60px] w-[100px]  flex"
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1692258705-wasabi-2png.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h1 className="text-lg font-bold text-[#2a435d]">
                                        Pizza Rida
                                    </h1>
                                    <h3 className="my-2 text-sm">
                                        Available Stock To check stock select
                                        branch after clicking this food
                                    </h3>
                                    <h2 className="text-lg font-bold text-[#2a435d]">
                                        12.00$
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="absolute top-0 left-0"
                src="https://khadyo.softtechdemo.com/website/images/shapes/triple.png"
                alt=""
            />
            <img
                className="absolute top-0 right-0 "
                src="https://khadyo.softtechdemo.com/website/images/shapes/donar.png"
                alt=""
            />
            <img
                className="absolute top-[35%] left-0"
                src="https://khadyo.softtechdemo.com/website/images/shapes/scatter.png"
                alt=""
            />
            <img
                className="absolute right-0 top-[25%] "
                src="https://khadyo.softtechdemo.com/website/images/shapes/sm-tomatto.png"
                alt=""
            />
            <img
                className="absolute right-0 top-[60%]"
                src="https://khadyo.softtechdemo.com/website/images/shapes/34.png"
                alt=""
            />
        </div>
    );
};

export default PopularComponent;
