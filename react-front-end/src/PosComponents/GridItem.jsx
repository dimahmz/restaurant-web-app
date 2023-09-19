/* eslint-disable react/prop-types */

const GridItem = ({ food }) => {
    return (
        <div className="mb-[10px] px-1 w-[136.55px] min-h-[190.55px] cursor-pointer">
            <div className="bg-white shadow-lg h-full">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="transition duration-300 ease-in-out hover:scale-110"
                        src={food.image}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center items-center text-[#121053]">
                    <div className="p-2 text-sm  uppercase flex justify-center items-center text-center font-bold">
                        {food.name}
                    </div>
                    <div className="p-2 text-sm uppercase flex justify-center items-center text-center font-bold">
                        Stock: {food.in_stock}
                    </div>
                </div>
            </div>
        </div>
    );
};

const GridItems = ({ data }) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-x-3">
                {data.map((item, index) => (
                    <GridItem key={index} food={item} />
                ))}
            </div>
        </div>
    );
};

export default GridItems;
