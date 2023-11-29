import { DataGrid } from "@mui/x-data-grid";

export default function CustomDataGrid({
  isLoading,
  columns,
  filteredRows,
  props,
}) {
  // const $rows = filteredRows?.map((row) => {
  //   return {
  //     ...row,
  //   };
  // });

  return (
    <div className="w-full h-[411px] px-4 py-5">
      <DataGrid
        {...props}
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
          height: "100%",
        }}
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        loading={isLoading}
      />
    </div>
  );
}
