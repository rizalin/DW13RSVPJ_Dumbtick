import { GET_EVENTS, NEXT_EVENT } from "../_config/const";

const initialState = {
    data: [],
    isLoading: true,
    isPost: false,
    error: false
};

export const filteredEvent = (state = initialState, action) => {
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
