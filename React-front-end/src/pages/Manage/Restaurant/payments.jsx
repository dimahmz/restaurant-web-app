import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { PaymentType } from "../../../APIs/Restaurant";
import TableHeader from "../tableHader";
import Filter from "../../../utils/filters";

const Branches = () => {
  const [Payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredPayments, setFiltredPayments] = useState([]);

  async function fechPayments() {
    setIsLoading(true);
    const response = await PaymentType.get();
    if (response.success) {
      setPayments(response.payload);
      setFiltredPayments(response.payload);
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

  function filterPayments(e) {
    const name = e.target.value;
    const $filtredPayments = Filter.byName(Payments, name);
    setFiltredPayments($filtredPayments);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader
        title="Payment Type List"
        handleSearchChange={filterPayments}
      />
      <div className="w-full h-[370px] px-4 py-4 ">
        <DataGrid
          rows={filtredPayments}
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
