import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/menu`)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  // Return menu and loading state
  return [menu, loading];
};

export default useMenu;
