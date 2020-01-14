import { GET_ORDER, ADD_ORDER, EDIT_PAYMENT } from "../_config/const";
import axios from "axios";


export const addOrder = order => {
  return {
    type: ADD_ORDER,
    payload: axios({
      method: "POST",
      url: "https://dumbtick.herokuapp.com/api/v1/order/",
      data: order
    })
  };
};

export const getOrder = (id) => {
  return {
    type: GET_ORDER,
    payload: axios.get("https://dumbtick.herokuapp.com/api/v1/order/" + id)
  };
};

export const editOrder = (order, id) => {
  return {
    type: EDIT_PAYMENT,
    payload: axios({
      method: "PUT",
      url: `https://dumbtick.herokuapp.com/api/v1/order/${id}`,
      params: {
        id
      },
      data: order
    })
  };
};



