import axios from "axios"

export function getToken(token) {
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
}