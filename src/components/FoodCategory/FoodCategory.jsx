// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../SectionTitle/SectionTitle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./FoodCategory.css";

// Import images
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

// import required modules
import { Pagination } from "swiper/modules";

const FoodCategory = () => {
  return (
    <div className="py-20">
      {/* Section Title */}
      <SectionTitle heading={`Our Menu`} subHeading={`---From 11:00am to 10:00pm---`} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white"
      >
        <SwiperSlide>
          <img src={slide1} />
          <div className="absolute bottom-8 text-3xl font-semibold text-shadow-md uppercase">
            <p>Salads</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <div className="absolute bottom-8 text-3xl font-semibold text-shadow-md uppercase">
            <p>Soups</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <div className="absolute bottom-8 text-3xl font-semibold text-shadow-md uppercase">
            <p>Pizzas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <div className="absolute bottom-8 text-3xl font-semibold text-shadow-md uppercase">
            <p>Desserts</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <div className="absolute bottom-8 text-3xl font-semibold text-shadow-md uppercase">
            <p>Salads</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodCategory;
