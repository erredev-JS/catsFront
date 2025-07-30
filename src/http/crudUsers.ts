import { AxiosInterceptor } from "../interceptor/AxiosInterceptor";


const BASE_URL = "https://nest-postgres-api-rest-jwt-cats.onrender.com/users";


export const getUsersPaged = async (pageSelected: number, size: number = 10) => {
    const response = await AxiosInterceptor.get(`${BASE_URL}/${size}/${pageSelected}`)
    return response.data
}

export const deleteUserById = async (userId: number) => {
    const response = await AxiosInterceptor.delete(`${BASE_URL}/${userId}`)
    return response.data
}