import axios from "axios";
import { BASE_URL } from "./Constants";

const apiService = axios.create({
  baseURL: BASE_URL,
});

export default apiService;
