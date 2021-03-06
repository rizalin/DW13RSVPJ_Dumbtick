import {
  GET_CATEGORIES,
  GET_CATEGORY,
  GET_EVENT_BY_CATEGORY
} from "../_config/const";
import axios from "axios";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios.get("https://dumbtick.herokuapp.com/api/v1/categories")
  };
};

export const getCategory = (id) => {
  return {
    type: GET_CATEGORY,
    payload: axios.get("https://dumbtick.herokuapp.com/api/v1/category/" + id)
  };
};

export const getEventByCategory = (id) => {
  return {
    type: GET_EVENT_BY_CATEGORY,
    payload: axios.get(
      "https://dumbtick.herokuapp.com/api/v1/category/" + id + "/events"
    )
  };
}
