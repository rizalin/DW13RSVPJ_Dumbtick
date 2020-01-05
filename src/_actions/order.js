import { GET_ORDER, ADD_ORDER, EDIT_PAYMENT } from "../_config/const";
import axios from "axios";


export const addOrder = order => {
  return {
    type: ADD_ORDER,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/order/",
      data: order
    })
  };
};

export const getOrder = (id) => {
  return {
    type: GET_ORDER,
    payload: axios.get("http://localhost:5000/api/v1/order/" + id)
  };
};

export const editOrder = (order, id) => {
  return {
    type: EDIT_PAYMENT,
    payload: axios({
      method: "PUT",
      url: `http://localhost:5000/api/v1/order/${id}`,
      params: {
        id
      },
      data: order
    })
  };
};



