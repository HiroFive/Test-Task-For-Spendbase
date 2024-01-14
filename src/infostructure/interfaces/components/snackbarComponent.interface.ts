import { Dispatch, SetStateAction } from "react";
import { AlertColor } from "@mui/material";

export interface ISnackbarComponentProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<any>>;
  type?: AlertColor | undefined;
}
