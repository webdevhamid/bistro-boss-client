import axios from "axios";

const axiosPublicInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

const useAxiosPublic = () => {
  return axiosPublicInstance;
};

export default useAxiosPublic;
