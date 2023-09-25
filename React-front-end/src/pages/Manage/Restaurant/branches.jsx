import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Branch } from "../../../APIs/Restaurant";

import SearchBar from "../../../components/SeachBar";

const Branches = () => {
    const [branches, setBranches] = useState([]);

    async function fechBranches() {
        const response = await Branch.get();
        if (response.success) {
            setBranches(response.payload);
        }
    }
    useEffect(() => {
        fechBranches();
    }, []);

    const columns = [
        { field: "id", headerName: "S/L", flex: 1 },
        { field: "name", headerName: "name", flex: 1 },
        { field: "delivery_charge", headerName: "Delivery Charge", flex: 1 },
        { field: "address", headerName: "address", flex: 1 },
        { field: "phone", headerName: "Phn No", flex: 1 },
        {
            field: "no_field",
            headerName: "Action",
            renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
            flex: 1,
        },
    ];

    return (
        <>
            <SearchBar title="Branch List" />

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
                    rows={branches}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </>
    );
};

export default Branches;
