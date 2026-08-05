import React from "react";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import { replace, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosInstance = useAxiosSecure();
  const [_, refetch] = useCart();

  const handleAddToCart = async (item) => {
    const { name: recipeName, recipe, image, price, _id: itemId } = item || {};

    if (user && user.email) {
      // Send cart data to the server
      const cartItem = {
        itemId,
        userEmail: user.email,
        recipeName,
        recipe,
        image,
        price,
      };

      const { data } = await axiosInstance.post("/carts", cartItem);

      if (data.acknowledged) {
        // Show the success Cart message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your cart has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

        // Refetch the cart again to immediately update/display the cart counts
        refetch();
      }
    } else {
      // If the user is not logged in
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add  cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        // Redirect user to the login page
        if (result.isConfirmed) return navigate("/auth/login", { state: location });
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-amber-50 px-8 border-b-2 border-amber-500 border-0 uppercase hover:bg-black hover:text-white hover:border-b-transparent"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
