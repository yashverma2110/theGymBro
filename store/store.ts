import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

// reducers
import templateReducer from "./reducers/template";

const reducer = combineReducers({
  slice1: templateReducer,
});

const store = createStore(reducer, applyMiddleware(promise, logger));

export default store;
