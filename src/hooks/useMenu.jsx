import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const {
    data: menu,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/menu");
      return data;
    },
  });

  // useEffect(() => {
  //   fetch(`http://localhost:3000/menu`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  // Return menu and loading state
  return [menu, loading, error];
};

export default useMenu;
