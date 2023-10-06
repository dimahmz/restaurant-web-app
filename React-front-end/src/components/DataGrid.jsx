import { DataGrid } from "@mui/x-data-grid";

export default function CustomDataGrid({ isLoading, columns, filteredRows }) {
  return (
    <DataGrid
      sx={{
        "& .MuiDataGrid-cell:focus": {
          outline: "none",
          border: "none",
        },
        "& .MuiDataGrid-cell:hover": {
          outline: "none",
          border: "none",
        },
        "& .MuiDataGrid-cell:focus-within": {
          outline: "none",
          border: "none",
        },
      }}
      rows={filteredRows.map((row, i) => ({
        _index: i + 1,
        ...row,
      }))}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      loading={isLoading}
    />
  );
}
