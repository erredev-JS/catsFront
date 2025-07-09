import axios from "axios"

const BASE_URL = 'https://nest-postgres-api-rest-jwt-cats.onrender.com/cats'


export const getAllCats = async () => {
    const response = await axios.get(BASE_URL)
    return response.data
}