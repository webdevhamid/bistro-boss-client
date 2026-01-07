import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import axios from "axios";

const PopularMenu = ({ heading, subHeading, sectionTitle, categoryType = 'popular' }) => {
  // Menu item state
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("menu.json").then((res) => {
      const popularItems = res.data.filter((item) => item.category === categoryType);
      setMenu(popularItems);
    });
  }, [categoryType]);

  console.log(menu);

  return (
    <section className="pb-20">
      {/* Popular menu heading */}
      <SectionTitle heading={heading} subHeading={subHeading} sectionTitle={sectionTitle} />

      {/* Menu section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {/* View Full menu button */}
      <div className="flex justify-center mt-8">
        <button className="btn btn-outline bg-transparent hover:border-amber-500 hover:text-amber-500">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
