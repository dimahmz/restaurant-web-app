import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import { Food } from "../../../APIs/Food";

const FoodItems = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function fetchFood() {
            // const response = await Food;
        }
    }, []);

    const columns = [
        { field: "id", headerName: "S/L", flex: 1 },
        { field: "image", headerName: "Image", flex: 1 },
        { field: "name", headerName: "name", flex: 1 },
        { field: "price", headerName: "price", flex: 1 },
        {
            field: "no_field",
            headerName: "Action",
            renderCell: () => (
                <BsThreeDots onClick="" style={{ cursor: "pointer" }} />
            ),
            flex: 1,
        },
    ];

    return (
        <div className="bg-white">
            <div className="flex-center-between">
                <h1>Food Item List</h1>
                <div className="flex">
                    <input
                        type="text"
                        name="search"
                        className="bg-[#f0f7fb] h-9"
                    />
                    <div className="bg-[#f64e60]  p-2 h-9 w-9 flex-center">
                        <BiSearch size={19} className="text-white" />
                    </div>
                </div>

                <button className="bg-[#f64e60] uppercase text-white py-2 px-4">
                    add new
                </button>
            </div>

            <div
                style={{
                    width: "100%",
                    backgroundColor: "#ffffff",
                    padding: "14px",
                    overflowY: "auto",
                    maxHeight: "65vh",
                }}
            >
                <DataGrid
                    rows={[]}
                    columns={[]}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </div>
    );
};

export default FoodItems;
