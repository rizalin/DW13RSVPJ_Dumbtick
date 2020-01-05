import { GET_EVENT, GET_EVENTS, ADD_EVENT, NEXT_EVENT } from "../_config/const";

const initialState = {
  data: [],
  isLoading: true,
  isPost: false,
  error: false
};

export const event = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENTS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENTS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_EVENTS}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${GET_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_EVENT}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${ADD_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${ADD_EVENT}_FULFILLED`:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        isLoading: false,
        isPost: false
      };
    case `${ADD_EVENT}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${NEXT_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${NEXT_EVENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${NEXT_EVENT}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
