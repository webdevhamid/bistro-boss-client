import CallUs from "../../components/CallUs/CallUs";
import FeaturedMenu from "../../components/FeaturedMenu/FeaturedMenu";
import FeaturedTitle from "../../components/FeaturedTitle/FeaturedTitle";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import Hero from "../../components/Hero/Hero";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import RecommendedMenu from "../../components/RecommendedMenu/RecommendedMenu";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      {/* Carousel */}
      <Hero />
      {/* Food Category */}
      <FoodCategory />
      {/* Featured Title */}
      <FeaturedTitle heading={'Bistro Boss'}/>
      {/* Popular Menu */}
      <PopularMenu heading={'From our menu'} subHeading={'Check it out'} />
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
