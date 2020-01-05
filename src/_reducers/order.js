import { GET_ORDER, ADD_ORDER, EDIT_PAYMENT } from "../_config/const";

const initialState = {
  data: [],
  isLoading: true,
  isPost: false,
  error: false
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_ORDER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${ADD_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${ADD_ORDER}_FULFILLED`:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        isLoading: false,
        isPost: false
      };
    case `${ADD_ORDER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${EDIT_PAYMENT}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${EDIT_PAYMENT}_FULFILLED`:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload.config.params.id - 1),
          ...[action.payload.data],
          ...state.data.slice(action.payload.config.params.id)
        ],
        isLoading: false,
        isPost: false
      };
    case `${EDIT_PAYMENT}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
