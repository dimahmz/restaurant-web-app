import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { PaymentType } from "../../../APIs/Restaurant";
import SearchBar from "../../../components/SeachBar";

const Branches = () => {
    const [payments, setPayments] = useState([]);

    async function fechPayments() {
        const response = await PaymentType.get();
        if (response.success) {
            setPayments(response.payload);
        }
    }
    useEffect(() => {
        fechPayments();
    }, []);

    const columns = [
        { field: "id", headerName: "S/L", flex: 1 },
        { field: "name", headerName: "name", flex: 1 },
        { field: "unique_key", headerName: "Unique Key", flex: 1 },

        {
            field: "no_field",
            headerName: "Action",
            renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
            flex: 1,
        },
    ];

    return (
        <>
            <SearchBar title="Payment Type List" />

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
                    rows={payments}
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
