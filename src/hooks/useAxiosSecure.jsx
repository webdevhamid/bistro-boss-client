import axios from "axios";

const useAxiosSecure = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
  });
  return axiosInstance;
};

export default useAxiosSecure;
