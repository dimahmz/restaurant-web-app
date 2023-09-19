import { useEffect, useState } from "react";
import { DeptTag } from "../../../APIs/Restaurant";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "../../../components/SeachBar";

const Branches = () => {
    const [departments, setDepartments] = useState([]);

    async function fechDepartments() {
        const response = await DeptTag.get();
        if (response.success) {
            setDepartments(response.payload);
        }
    }
    useEffect(() => {
        fechDepartments();
    }, []);

    const columns = [
        { field: "id", headerName: "S/L", flex: 1 },
        { field: "name", headerName: "name", flex: 1 },
        { field: "commission", headerName: "Commission (%)", flex: 1 },

        {
            field: "no_field",
            headerName: "Action",
            renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
            flex: 1,
        },
    ];

    return (
        <>
            <SearchBar title="Department Tag List" />

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
                    rows={departments}
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
