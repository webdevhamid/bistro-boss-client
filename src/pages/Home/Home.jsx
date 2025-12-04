import CallUs from "../../components/CallUs/CallUs";
import FeaturedTitle from "../../components/FeaturedTitle/FeaturedTitle";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import Hero from "../../components/Hero/Hero";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import RecommendedMenu from "../../components/RecommendedMenu/RecommendedMenu";

const Home = () => {
  return (
    <div className="">
      {/* Carousel */}
      <Hero />
      {/* Food Category */}
      <FoodCategory />
      {/* Featured Title */}
      <FeaturedTitle />
      {/* Popular Menu */}
      <PopularMenu />
      {/* Call Us */}
      <CallUs />
      {/* Recommend Menu */}
      <RecommendedMenu />
    </div>
  );
};

export default Home;
