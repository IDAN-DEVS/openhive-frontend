import axios from "axios";

// Function to get the token from storage or any other source
const getToken = () => {
  return localStorage.getItem("token"); // Modify this according to your token storage strategy
};

// Axios instance for authentication
const authAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth`, // Replace with your auth base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios instance for database interactions
const dbAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Replace with your database API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the Bearer token to each request
dbAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { authAxios, dbAxios };
