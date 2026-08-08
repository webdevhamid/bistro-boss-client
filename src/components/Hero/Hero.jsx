// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <title>Bistro Boss Restaurant | Home</title>
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen md:h-[800px] max-h-max hero-section">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
