import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { LoadingButton } from "@mui/lab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmModal({
  labels,
  open,
  onSubmitModal,
  handleClose,
  isLoading = false,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {labels.message}
          </Typography>
          <div className="flex space-x-8 mt-5">
            <LoadingButton
              variant="contained"
              sx={{
                paddingX: "30px",
                backgroundColor: "#F5364A",
                "&:hover": {
                  backgroundColor: "#F5365A",
                },
              }}
              loading={isLoading}
              loadingPosition="center"
              onClick={onSubmitModal}
            >
              {labels.submit}
            </LoadingButton>
            <Button
              variant="contained"
              sx={{
                paddingX: "20px",
                backgroundColor: "#0cb98b",
                "&:hover": {
                  backgroundColor: "#0cb98b",
                },
                textTransform: "uppercase",
              }}
              onClick={handleClose}
            >
              {labels.cancel}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
