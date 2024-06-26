import axios from "axios";

export const axiosi = axios.create({
  withCredentials: true,
  baseURL: "https://ecommerce-api-nj1u.onrender.com",
});
