import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecureInstance = useAxiosSecure();
  const { user } = useAuth();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecureInstance.get(`/users/admin/${user?.email}`);
      return data?.isAdmin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
