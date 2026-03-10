import axios from "axios";

// Use environment variable for production, fallback to localhost for development
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

export default API;
