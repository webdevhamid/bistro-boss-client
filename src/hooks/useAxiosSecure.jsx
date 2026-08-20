import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  useEffect(() => {
    // Add token in the request header all the time whenever an API request made using the axios secure instance
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        // Get the token
        const token = localStorage.getItem("access-token");
        // Add the token in the headers "authorization" property
        config.headers.authorization = `Bearer ${token}`;

        // console.log(config);
        return config;
      },
      (err) => {
        return Promise.reject(err);
      },
    );

    // Intercept 401 and 403 status
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (err) => {
        const status = err?.response?.status;

        if (status === 401 || status === 403) {
          // Logout the user
          await logoutUser();

          // Navigate the user
          navigate("/auth/login");

          // Show error message
          toast.error(err.response?.data?.message);
        }
        return Promise.reject(err);
      },
    );

    // Interceptor cleanup/removing function
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
