import axios from "axios"


export const apiClient = axios.create({
    baseURL: "http://thst7353.odns.fr/api/"
});


export const name_abv_ibu = "/filter_abv_ibu"
export const style_search = "/style_search"
