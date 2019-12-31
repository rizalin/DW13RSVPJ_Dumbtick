import { GET_EVENT, GET_EVENTS } from "../_config/const";
import axios from "axios";

export function getEvent(id) {
  return {
    type: GET_EVENT,
    payload: axios.get("http://localhost:5000/api/v1/event/" + id)
  };
}

export function getEvents() {
  return {
    type: GET_EVENTS,
    payload: axios.get("http://localhost:5000/api/v1/events/")
  };
}
