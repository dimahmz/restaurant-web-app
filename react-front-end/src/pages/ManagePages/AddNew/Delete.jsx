import React from "react";

const Delete = ({ onClose }) => {
    return (
        <div className=" bg-white border-2 w-[474px] h-[208px]">
            <div className="p-4">
                <div>
                    <h1 className="text-[4rem] my-8 font-bold p-1">
                        Are you sure?
                    </h1>
                    <h2 className="flex justify-center mb-4">
                        You want to delete this?
                    </h2>
                    <div className="flex justify-center gap-2">
                        <button className="text-white bg-[#f64e60] py-2 px-4">
                            Yes,delete it!
                        </button>
                        <button
                            onClick={onClose}
                            className="text-white bg-[#0dd19d] py-2 px-4"
                        >
                            {" "}
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;
