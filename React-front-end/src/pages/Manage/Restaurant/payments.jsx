import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { PaymentType } from "../../../APIs/Restaurant";
import SearchBar from "../../../components/SeachBar";

const Branches = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fechPayments() {
    setIsLoading(true);
    const response = await PaymentType.get();
    if (response.success) {
      setPayments(response.payload);
    }
    setIsLoading(false);
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
    <div className="bg-white h-full">
      <SearchBar title="Payment Type List" />
      <div className="w-full h-[370px] px-4 py-4 ">
        <DataGrid
          rows={payments}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default Branches;
