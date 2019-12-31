import {
  GET_CATEGORIES,
  GET_CATEGORY,
  GET_EVENT_BY_CATEGORY
} from "../_config/const";
import axios from "axios";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios.get("http://localhost:5000/api/v1/categories")
  };
};

export const getCategory = () => id => {
  return {
    type: GET_CATEGORY,
    payload: axios.get("http://localhost:5000/api/v1/category/" + id)
  };
};

export function getEventByCategory(id) {
  return {
    type: GET_EVENT_BY_CATEGORY,
    payload: axios.get(
      "http://localhost:5000/api/v1/category/" + id + "/events"
    )
  };
}
