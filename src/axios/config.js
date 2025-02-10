import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/v1/bot/resources",
  // withCredentials: true,
});

api.defaults.headers.common['Content-Type'] = 'multipart/form-data'; 

export default api;
