import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { UseTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import "./AuthModal.scss";
import { Button, TextField } from "@mui/material";

import Users from "../../store/users.json";

const AuthModal: React.FC = () => {
  const dispatch = useDispatch();
  const { AuthModal } = UseTypedSelector((state) => state.user);

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loginError, setLoginError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleClose = () => {
    dispatch({ type: "CONTROL_MODAL", payload: false });
  };

  const AuthLoginSuccess = () => {
    dispatch({ type: "AUTH_LOGIN", payload: true });
  };

  const handleError = () => {
    dispatch({ type: "CONTROL_ERROR", payload: true });
  };

  const validDataLogin = (e: string) => {
    setLogin(e);
    const validLogin = (value: string) => /^[A-Za-z ]{2,}$/.test(value);
    setLoginError(!validLogin(e));
  };

  const validDataPassword = (e: string) => {
    setPassword(e);
    const validPassword = (value: string) => /^[A-Za-z0-9]{8,}$/.test(value);
    setPasswordError(!validPassword(e));
  };

  const handleAuth = () => {
    const serachUser = Users.find((el) => {
      let findUser = login === el.login && password === el.password;

      return findUser;
    });
    if (serachUser) {
      setLogin("");
      setPassword("");
      localStorage.setItem("name", serachUser.name);
      AuthLoginSuccess();
      handleClose();
    } else {
      handleError();
    }
  };

  return (
    <div>
      <Modal
        open={AuthModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-window" component="form">
          <h2>Авторизация</h2>
          <div className="form-input">
            <TextField
              error={loginError}
              helperText={
                loginError ? "Некорректный логин, только латинские буквы" : ""
              }
              id="outlined-basic"
              label="Логин"
              variant="outlined"
              value={login}
              onChange={(e) => validDataLogin(e.target.value)}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              error={passwordError}
              helperText={
                passwordError ? "Длина пароля не менее 8 символов" : ""
              }
              id="outlined-password-input"
              label="Пароль"
              type="password"
              value={password}
              onChange={(e) => validDataPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <Button onClick={() => handleAuth()}>Войти</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
