import {
  GET_CATEGORIES,
  GET_CATEGORY,
  GET_EVENT_BY_CATEGORY,
} from "../_config/const";

const initialState = {
  data: [],
  isLoading: true,
  isPost: false,
  error: false
};

export const category = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_CATEGORIES}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${GET_CATEGORY}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORY}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_CATEGORY}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export const eventByCat = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENT_BY_CATEGORY}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENT_BY_CATEGORY}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_EVENT_BY_CATEGORY}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
