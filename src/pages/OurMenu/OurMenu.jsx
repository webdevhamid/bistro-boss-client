import BlurrySectionTItle from "../../components/BlurrySectionTitle/BlurrySectionTItle";
import menuImg from "../../assets/menu/banner3.jpg";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import FeaturedTitle from "../../components/FeaturedTitle/FeaturedTitle";
import useMenu from "../../hooks/useMenu";
import imgDessert from "../../assets/menu/dessert-bg.jpeg";
import imgPizza from "../../assets/menu/pizza-bg.jpg";
import imgSalad from "../../assets/menu/salad-bg.jpg";
import imgSoup from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");

  return (
    <div>
      {/* Page Title */}
      <title>Bistro Boss Restaurant | Menu</title>
      {/* Our Menu Section Title*/}
      <BlurrySectionTItle
        imgURL={menuImg}
        title={"Our Menu"}
        desc={"Would you like to try a dish?"}
      />

      {/* Today's offer section */}
      <div className="mt-10">
        <MenuCategory
          heading={"Today's Offer"}
          subHeading={"Don't miss"}
          items={offered}
          category={"offered"}
        />
      </div>

      {/* Desserts Section */}
      <FeaturedTitle heading={"Desserts"} bgColor="bg-black/30 text-white" bgCover={imgDessert} />
      <MenuCategory sectionTitle={false} items={desserts} category={"desserts"} />

      {/* Pizza Section */}
      <FeaturedTitle heading={"Pizza"} bgColor="bg-black/30 text-white" bgCover={imgPizza} />
      <MenuCategory sectionTitle={false} items={pizzas} category={"pizzas"} />

      {/* Salad Section */}
      <FeaturedTitle heading={"Salads"} bgColor="bg-black/30 text-white" bgCover={imgSalad} />
      <MenuCategory sectionTitle={false} items={salads} category={"salads"} />

      {/* Soups Section */}
      <FeaturedTitle heading={"Soups"} bgColor="bg-black/30 text-white" bgCover={imgSoup} />
      <MenuCategory sectionTitle={false} items={soups} category={"soups"} />
    </div>
  );
};

export default OurMenu;
