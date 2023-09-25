import { Snackbar, Alert } from "@mui/material";

export default function SimpleSnackbar({
    message,
    open,
    handleClose,
    severity,
    sx,
}) {
    if (!severity) {
        severity = "error";
    }
    // className={ "& .MuiAlert-icon": { color: "#fff" } }
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
