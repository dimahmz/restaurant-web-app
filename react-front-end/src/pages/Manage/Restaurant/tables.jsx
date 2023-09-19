import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Table } from "../../../APIs/Restaurant";
import SearchBar from "../../../components/SeachBar";

const Branches = () => {
    const [tables, setTables] = useState([]);

    async function fechTables() {
        const response = await Table.get();
        if (response.success) {
            setTables(response.payload);
        }
    }
    useEffect(() => {
        fechTables();
    }, []);

    const columns = [
        { field: "id", headerName: "S/L", flex: 1 },
        { field: "name", headerName: "name", flex: 1 },
        { field: "capacity", headerName: "Capacity", flex: 1 },
        {
            field: "branch_id",
            headerName: "Branch",
            valueGetter: (params) => {
                // Calculate age in months based on the 'age' field in years
                return params.row.branch.name;
            },
            flex: 1,
        },

        {
            field: "no_field",
            headerName: "Action",
            renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
            flex: 1,
        },
    ];

    return (
        <>
            <SearchBar title="Table List" />

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
                    rows={tables}
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
