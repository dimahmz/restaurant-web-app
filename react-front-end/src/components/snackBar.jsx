import { Snackbar, Alert } from "@mui/material";

export default function SimpleSnackbar({
    message,
    open,
    handleClose,
    severity,
}) {
    if (!severity) {
        severity = "error";
    }
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}
