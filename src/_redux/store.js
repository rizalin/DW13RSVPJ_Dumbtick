import { createStore, applyMiddleware } from "redux";
import { category } from "../_reducers/category";
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";

const reducers = combineReducers({
  category
});

const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware));

export default store;
