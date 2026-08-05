import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/carts?email=${user.email}`);
      return data;
    },
  });
  return [cart, refetch];
};

export default useCart;
