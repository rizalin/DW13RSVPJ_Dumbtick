import { GET_FAVORITES, ADD_FAVORITE } from "../_config/const";
import axios from "axios";

export const getFavorites = (id) => {
    return {
        type: GET_FAVORITES,
        payload: axios.get("https://dumbtick.herokuapp.com/api/v1/favorite/user/" + id)
    };
};

export const addFavorite = favorite => {
    return {
        type: ADD_FAVORITE,
        payload: axios({
            method: "POST",
            url: "https://dumbtick.herokuapp.com/api/v1/favorite/",
            data: favorite
        })
    };
};

