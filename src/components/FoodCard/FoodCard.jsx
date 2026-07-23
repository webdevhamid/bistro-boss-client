import React from "react";

// category
// :
// "drinks"
// image
// :
// name
// :
// "Haddock"
// price
// :
// 14.7
// recipe

// _id
// :
// "642c155b2c4774f05c36eeb9"

const FoodCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="min-h-1/2">
        <span className="absolute right-2 top-2 bg-black text-center text-white text-sm px-4 py-2 font-bold rounded">
          ${item.price}
        </span>
        <img src={item.image} alt="Shoes" className="object-cover" />
      </figure>
      <div className="card-body items-center justify-center text-center">
        <h2 className="card-title">{item.name}</h2>
        <p className="mb-5">{item.recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline bg-amber-50 px-8 border-b-2 border-amber-500 border-0 uppercase hover:bg-black hover:text-white hover:border-b-transparent">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
