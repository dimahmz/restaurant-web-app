import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
};

function EditModal({
  labels,
  open,
  handleClose,
  isLoading,
  children,
  onSubmitForm,
}) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style}>
          <form>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ m: 2 }}
              onSubmit={onSubmitForm}
            >
              {labels.title}
            </Typography>
            <Divider />
            <Box>{children}</Box>
            <div className="w-full flex space-x-2 mt-5 p-4">
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
                onClick={onSubmitForm}
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
                onClick={handleClose}
              >
                CLOSE
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default EditModal;
