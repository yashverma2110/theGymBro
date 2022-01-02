import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "remote-redux-devtools";

// reducers
import authReducer from "./modules/auth/auth-reducer";

const reducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(promise, logger))
);

export default store;
