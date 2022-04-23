const AUTH_LOGIN = "AUTH_LOGIN";
const CONTROL_MODAL = "CONTROL_MODAL";
const CONTROL_ERROR = "CONTROL_ERROR";

interface AuthState {
  isAuth: boolean;
  AuthModal: boolean;
  Error: boolean;
}

interface UserAction {
  type: string;
  payload?: any;
}

const initialState: AuthState = {
  isAuth: false,
  AuthModal: false,
  Error: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): AuthState => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, isAuth: action.payload };

    case CONTROL_MODAL:
      return { ...state, AuthModal: action.payload };

    case CONTROL_ERROR:
      return { ...state, Error: action.payload };

    default:
      return state;
  }
};
