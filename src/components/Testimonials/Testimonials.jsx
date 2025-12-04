import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Swiper Styles
import "./Testimonials.css";

// import required modules
import { Navigation } from "swiper/modules";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("reviews.json").then((res) => setReviews(res.data));
  }, []);

  console.log(reviews);

  return (
    <div className="py-20">
      <SectionTitle heading={"Testimonials"} subHeading={"What our clients say"} />

      {/* Slider */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[200px]!">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col">
              {/* Ratings */}
              <div className="flex justify-center items-center">
                <div className="rating">
                  <div className="mask mask-star bg-orange-400" aria-label="1 star"></div>
                  <div className="mask mask-star bg-orange-400" aria-label="2 star"></div>
                  <div className="mask mask-star bg-orange-400" aria-label="3 star"></div>
                  <div
                    className="mask mask-star bg-orange-400"
                    aria-label="4 star"
                    aria-current="true"
                  ></div>
                  <div className="mask mask-star bg-orange-400" aria-label="5 star"></div>
                </div>
              </div>
              <FaQuoteLeft className="text-5xl mx-auto my-5" />
              <p className="text-sm font-medium">{review?.details}</p>
              <p className="text-md text-amber-500 font-semibold mt-2 uppercase">{review?.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
