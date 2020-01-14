import { GET_USER, EDIT_USER } from "../_config/const";
import axios from "axios";

export const getUser = (id) => {
  return {
    type: GET_USER,
    payload: axios.get("https://dumbtick.herokuapp.com/api/v1/user/" + id)
  };
};


export const editUser = (user, id) => {
  return {
    type: EDIT_USER,
    payload: axios({
      method: "PUT",
      url: `https://dumbtick.herokuapp.com/api/v1/user/${id}`,
      params: {
        id
      },
      data: user
    })
  };
};