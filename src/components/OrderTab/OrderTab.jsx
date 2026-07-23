import React from "react";
import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="border-base-300 bg-base-100">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6 items-center">
        {items?.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
      {/* Pagination */}
      <div className="join">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked="checked"
        />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
      </div>
    </div>
  );
};

export default OrderTab;
