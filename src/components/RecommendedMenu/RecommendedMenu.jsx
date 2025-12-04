import axios from "axios";
import React, { useEffect, useState } from "react";
import RecommendedItem from "../RecommendItem/RecommendedItem";
import SectionTitle from "../SectionTitle/SectionTitle";

const RecommendedMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get(`menu.json`).then((res) => {
      const items = res.data.filter((item) => item.chefRecommend === true);
      setMenu(items);
    });
  }, []);
  return (
    <div className="pb-20">
        {/* Heading */}
        <SectionTitle heading={'Chef Recommends'} subHeading={'Should Try'}/>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
         {menu.map((item) => (
        <RecommendedItem key={item._id} item={item} />
      ))}
     </div>
    </div>
  );
};

export default RecommendedMenu;
