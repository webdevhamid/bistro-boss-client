import CallUs from "../../components/CallUs/CallUs";
import FeaturedMenu from "../../components/FeaturedMenu/FeaturedMenu";
import FeaturedTitle from "../../components/FeaturedTitle/FeaturedTitle";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import Hero from "../../components/Hero/Hero";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import RecommendedMenu from "../../components/RecommendedMenu/RecommendedMenu";
import Testimonials from "../../components/Testimonials/Testimonials";
import useMenu from "../../hooks/useMenu";
import imgChef from "../../assets/home/chef-service.jpg";

const Home = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      {/* Carousel */}
      <Hero />
      {/* Food Category */}
      <FoodCategory />
      {/* Featured Title */}
      <FeaturedTitle heading={"Bistro Boss"} bgCover={imgChef} />
      {/* Popular Menu */}
      <MenuCategory
        heading={"From our menu"}
        subHeading={"Check it out"}
        items={offered}
        category={"offered"}
      />
      {/* Call Us */}
      <CallUs />
      {/* Recommend Menu */}
      <RecommendedMenu />
      {/* Featured Menu */}
      <FeaturedMenu />
      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
