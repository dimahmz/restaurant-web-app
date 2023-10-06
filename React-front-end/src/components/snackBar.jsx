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
  const $sx =
    severity == "success"
      ? { background: "#07bc0c", color: "#fff" }
      : { background: "#de222a", color: "#fff" };

  const style = {
    ...sx,
    ...$sx,
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ ...position }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={style}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
