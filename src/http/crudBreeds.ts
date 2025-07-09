import axios from "axios";

const BASE_URL = "https://nest-postgres-api-rest-jwt-cats.onrender.com/breeds";


export const getAllBreed = async () => {

    const response = await axios.get(BASE_URL)
    return response.data

}