import { Alert, Snackbar } from "@mui/material";
import { ISnackbarComponentProps } from "../../infostructure/interfaces";

export default function SnackbarComponent(props: ISnackbarComponentProps) {
  const { isOpen, setIsOpen, type = "error" } = props;
  const duration = 5000;

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <div>
      <Snackbar open={isOpen} autoHideDuration={duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          Access is denied!
        </Alert>
      </Snackbar>
    </div>
  );
}
