import { GET_FAVORITES, ADD_FAVORITE } from "../_config/const";
import axios from "axios";

export const getFavorites = (id) => {
    return {
        type: GET_FAVORITES,
        payload: axios.get("http://localhost:5000/api/v1/favorite/user/" + id)
    };
};

export const addFavorite = favorite => {
    return {
        type: ADD_FAVORITE,
        payload: axios({
            method: "POST",
            url: "http://localhost:5000/api/v1/favorite/",
            data: favorite
        })
    };
};

