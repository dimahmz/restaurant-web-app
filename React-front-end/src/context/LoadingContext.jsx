import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function SimpleBackdrop() {
  const isLoading = useSelector((state) => state.user.isLoading);
  console.log(isLoading);

  return isLoading ? (
    <div>
      <Backdrop
        sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  ) : (
    <Outlet />
  );
}
