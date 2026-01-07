import BlurrySectionTItle from "../../components/BlurrySectionTitle/BlurrySectionTItle";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "./../../components/PopularMenu/PopularMenu";
import FeaturedTitle from "../../components/FeaturedTitle/FeaturedTitle";

const OurMenu = () => {
  return (
    <div>
      {/* Page Title */}
      <title>Bistro Boss Restaurant | Menu</title>
      {/* Our Menu Section */}
      <BlurrySectionTItle
        imgURL={menuImg}
        title={"Our Menu"}
        desc={"Would you like to try a dish?"}
      />
      {/* Today's offer section */}
      <div className="mt-10">
        <PopularMenu heading={"Today's Offer"} subHeading={"Don't miss"} />
      </div>

      {/* Desserts Section */}
      <FeaturedTitle heading={"Desserts"} bgColor="bg-black/30 text-white" />
      <PopularMenu sectionTitle={false} categoryType="dessert" />

      {/* Pizza Section */}
      <FeaturedTitle heading={"Pizza"} bgColor="bg-black/30 text-white" />
      <PopularMenu categoryType="pizza" sectionTitle={false} />

      {/* Salad Section */}
      <FeaturedTitle heading={"Salads"} bgColor="bg-black/30 text-white" />
      <PopularMenu categoryType="salad" sectionTitle={false} />
   
      {/* Soups Section */}
      <FeaturedTitle heading={"Soups"} bgColor="bg-black/30 text-white" />
      <PopularMenu categoryType="soup" sectionTitle={false} />
    </div>
  );
};

export default OurMenu;
