import { GET_FAVORITES, ADD_FAVORITE } from "../_config/const";

const initialState = {
    data: [],
    isLoading: true,
    isPost: false,
    error: false
};

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_FAVORITES}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${GET_FAVORITES}_FULFILLED`:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,
                isPost: false
            };
        case `${GET_FAVORITES}_REJECTED`:
            return {
                ...state,
                error: true,
                isLoading: false
            };
        case `${ADD_FAVORITE}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isPost: true
            };
        case `${ADD_FAVORITE}_FULFILLED`:
            return {
                ...state,
                data: state.data.concat(action.payload.data),
                isLoading: false,
                isPost: false
            };
        case `${ADD_FAVORITE}_REJECTED`:
            return {
                ...state,
                error: true,
                isLoading: false
            };
        default:
            return state;
    }
};
