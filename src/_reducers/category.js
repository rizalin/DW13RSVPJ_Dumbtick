import { GET_CATEGORIES } from "../_config/const";

const initialState = {
  data: [],
  isLoading: false,
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
        data: action.payload,
        isLoading: false,
        isPost: false
      };
    case `${GET_CATEGORIES}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
