import apiService from "../../utils/apiService";
import AUTH_ACTIONS_TYPES from "./auth-actionTypes";

interface loginPaylod {
  email: string;
  password: string;
}
const login = (payload: loginPaylod) => {
  return {
    type: AUTH_ACTIONS_TYPES.LOGIN,
    payload: apiService.post("/user/login", payload),
  };
};

interface signupPayload {
  fname: string;
  lname: string;
  email: string;
  password: string;
}
const signUp = (payload: signupPayload) => {
  return {
    type: AUTH_ACTIONS_TYPES.SIGN_UP,
    payload: apiService.post("/user/signup", payload),
  };
};

export { login, signUp };
