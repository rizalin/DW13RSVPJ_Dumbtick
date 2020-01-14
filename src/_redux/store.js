import { createStore, applyMiddleware, combineReducers } from "redux";
import { category, eventByCat } from "../_reducers/category";
import { event } from "../_reducers/event"
import { user } from "../_reducers/user"
import { order } from "../_reducers/order"
import { favorite } from "../_reducers/favorite"
import { filteredEvent } from "../_reducers/filteredEvent"
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";

const reducers = combineReducers({
  category,
  eventByCat,
  event,
  user,
  order,
  favorite,
  filteredEvent
});


const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware));

export default store;
