import { GET_ORDER, GET_ORDERS } from "../_config/const";
import axios from "axios";

export function getOrder(id) {
  return {
    type: GET_ORDER,
    payload: axios.get("http://localhost:5000/api/v1/order/" + id)
  };
}

export function getOrders() {
  return {
    type: GET_ORDERS,
    payload: axios.get("http://localhost:5000/api/v1/order/")
  };
}
