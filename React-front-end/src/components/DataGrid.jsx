import { DataGrid } from "@mui/x-data-grid";

export default function CustomDataGrid({
  isLoading,
  columns,
  filteredRows,
  props,
}) {
  const $rows = filteredRows?.map((row, i) => {
    return {
      id: i + 1,
      ...row,
      key: i,
    };
  });

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
        rows={$rows}
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
