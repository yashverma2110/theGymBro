import AUTH_ACTIONS_TYPES from "./auth-actionTypes";

const initialState = {
  loading: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.LOGIN + "_PENDING":
      return {
        ...state,
        loading: true,
      };
    case AUTH_ACTIONS_TYPES.LOGIN + "_FULFILLED":
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };
    case AUTH_ACTIONS_TYPES.LOGIN + "_REJECTED":
      return {
        ...state,
        loading: false,
      };
    case AUTH_ACTIONS_TYPES.SIGN_UP + "_PENDING":
      return {
        ...state,
        loading: true,
      };
    case AUTH_ACTIONS_TYPES.SIGN_UP + "_FULFILLED":
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };
    case AUTH_ACTIONS_TYPES.SIGN_UP + "_REJECTED":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
