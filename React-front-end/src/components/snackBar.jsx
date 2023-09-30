import { Snackbar, Alert } from "@mui/material";

export default function SimpleSnackbar({
  message,
  open,
  handleClose,
  severity,
  sx,
  position = { vertical: "bottom", horizontal: "center" },
}) {
  if (!severity) {
    severity = "error";
  }
  // className={ "& .MuiAlert-icon": { color: "#fff" } }
  return (
    <>
      <Snackbar
        anchorOrigin={{ ...position }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={sx}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
