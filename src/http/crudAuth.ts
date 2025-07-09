import axios from "axios";

const BASE_URL = "https://nest-postgres-api-rest-jwt-cats.onrender.com/auth";

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email: email,
    password: password,
  });
  return response.data;
};
