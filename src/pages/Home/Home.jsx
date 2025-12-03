import FoodCategory from "../../components/FoodCategory/FoodCategory";
import Hero from "../../components/Hero/Hero";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import SectionBg from "../../components/SectionBg/SectionBg";

const Home = () => {
  return (
    <div className="">
      {/* Carousel */}
      <Hero />
      {/* Food Category */}
      <FoodCategory />
      {/* Section background */}
      <SectionBg />
      {/* Popular Menu */}
      <PopularMenu />
    </div>
  );
};

export default Home;
