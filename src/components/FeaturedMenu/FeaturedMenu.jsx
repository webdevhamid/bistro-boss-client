import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImage from "../../assets/home/featured.jpg";

const FeaturedMenu = () => {
  return (
    <div className="w-screen left-1/2 right-1/2 relative ml-[-50vw] mr-[-50vw] py-20 bg-[url(../src/assets/home/featured.jpg)] bg-center bg-no-repeat bg-cover bg-fixed">
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative featured-menu">
        {/* Section heading */}
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it out"}
          textColor={"text-white"}
          dividerBg={"bg-white"}
        />

        {/* Featured Menu */}
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center justify-center px-8">
          <div>
            <img src={featuredImage} className="rounded-2xl" alt="featured-menu" />
          </div>
          <div className="flex gap-2 flex-col text-white">
            <p>March 20, 2025</p>
            <h3 className="text-2xl uppercase">Where can I get some?</h3>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia itaque explicabo
              velit eius dignissimos quas, fuga eos nam accusamus enim magnam accusantium
              perferendis totam? Reiciendis nostrum vel doloremque minima qui, eveniet sit sapiente!
              Dignissimos reprehenderit corporis dicta sint minus eos.
            </p>
            <div>
              <button className="btn btn-outline bg-transparent text-white px-8 border-b-4 rounded-md border-white border-0 uppercase hover:bg-black hover:text-white hover:border-b-transparent mt-5">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
