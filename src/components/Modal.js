import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";

function Modal({ open = false, onClose, children }) {
  return (
    <MuiModal open onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: {
            xs: "80%",
            sm: "30rem",
          },
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 2,
        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
}

export default Modal;
