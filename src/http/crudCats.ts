import axios from "axios"

const BASE_URL = 'https://nest-postgres-api-rest-jwt-cats.onrender.com/cats'


export const getAllCats = async () => {
    const response = await axios.get(BASE_URL)
    return response.data
}

export const postCat = async (name: string, age: number,  breedId: number) => {
    const response = await axios.post(BASE_URL, {
        name: name,
        age: age,
        breedId: breedId
    })
    return response.data
}