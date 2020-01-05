import { GET_EVENT, ADD_EVENT, NEXT_EVENT } from "../_config/const";
import axios from "axios";

export const getEvent = (id) => {
  return {
    type: GET_EVENT,
    payload: axios.get("http://localhost:5000/api/v1/event/" + id)
  };
};

export const addEvent = event => {
  return {
    type: ADD_EVENT,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/event/",
      data: event
    })
  };
};

export const getEvents = () => {
  return {
    type: GET_EVENT,
    payload: axios.get("http://localhost:5000/api/v1/events/")
  };
}

export const nextEvent = () => {
  return {
    type: NEXT_EVENT,
    payload: axios.get("http://localhost:5000/api/v1/event/date/")
  };
}