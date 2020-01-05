import { GET_USER, EDIT_USER } from "../_config/const";

const initialState = {
  data: [],
  isLoading: true,
  isPost: false,
  error: false
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${EDIT_USER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${EDIT_USER}_FULFILLED`:
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
    case `${EDIT_USER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
