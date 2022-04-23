import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { UseTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBarError() {
  const dispatch = useDispatch();
  const { Error } = UseTypedSelector((state) => state.user);

  const handleCloseError = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch({ type: "CONTROL_ERROR", payload: false });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={Error} autoHideDuration={5000} onClose={handleCloseError}>
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Введены не верные данные! Проверьте введенные данные.
        </Alert>
      </Snackbar>
    </Stack>
  );
}
