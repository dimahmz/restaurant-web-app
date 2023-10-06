import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -10%)",
  marginY: "10px",
  width: "100%",
  paddingY: 1,
  maxWidth: 600,
  maxHeight: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "auto",
};

function FormModal({
  labels,
  open,
  handleClose,
  isLoading,
  children,
  onSubmitForm,
}) {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={style}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitForm();
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ m: 2 }}
          >
            {labels.title}
          </Typography>
          <Divider />
          <Box>{children}</Box>
          <div className="w-full flex space-x-2 p-4">
            <LoadingButton
              sx={{
                paddingX: "30px",
                backgroundColor: "#F5364A",
                "&:hover": {
                  backgroundColor: "#F5365A",
                },
                width: "100%",
              }}
              loading={isLoading}
              variant="contained"
              loadingPosition="center"
              type="submit"
            >
              SAVE
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
                width: "100%",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
              type="button"
            >
              CLOSE
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default FormModal;
