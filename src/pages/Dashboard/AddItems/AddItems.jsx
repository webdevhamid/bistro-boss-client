import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./AddItems.css";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import { useState } from "react";

// ImgBB API Keys
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddItems = () => {
  const [loading, setLoading] = useState(false);

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    // Destructured input names from data object
    const { recipeName, category, price, recipeDetails, image } = data;

    // Image upload to ImgBB and then get an URL
    const imageFile = { image: image[0] };
    const res = await axiosPublic.post(imageHostingURL, imageFile, {
      // Required for image upload
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      // Send the menu item and image url to the server
      const menuItem = {
        name: recipeName,
        recipe: recipeDetails,
        image: res.data.data.display_url,
        category: category.toLowerCase(),
        price: parseFloat(price),
      };
      // Save MenuItem in the DB using POST API Endpoint
      const { data } = await axiosSecure.post("/menu", menuItem);
      console.log(data);

      if (data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your menu has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setLoading(false);
      }
    }
  };
  return (
    <div>
      <SectionTitle heading={`Add an item`} subHeading={`What's new?`} />

      {/* Add Item Form */}

      {/* Form */}
      <div className="bg-base-300 w-full shrink-0 rounded p-4 relative">
        {/* Spinner */}
        {loading && (
          <div className="absolute left-1/2 transform -translate-1/2 top-1/2">
            <Spinner />
          </div>
        )}
        <div className="card-body">
          <form
            className="fieldset lg:grid-cols-2 grid-cols-1 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Recipe Name */}
            <fieldset className="fieldset lg:col-span-2">
              <legend className="fieldset-legend">Recipe Name*</legend>
              <input
                type="text"
                className="input w-full input-lg"
                placeholder="Recipe Name"
                {...register("recipeName", { required: true })}
              />
              {/* Error Message */}
              {errors.recipeName && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Category */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category*</legend>

              <select
                className="select select-lg w-full"
                {...register("category", { required: true })}
              >
                <option value="">Choose a category</option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
                <option>Offered</option>
              </select>
              {/* Error Message */}
              {errors.category && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Price */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price*</legend>
              <input
                type="text"
                className="input w-full input-lg"
                placeholder="Price"
                {...register("price", { required: true })}
              />
              {/* Error Message */}
              {errors.price && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Recipe Details */}
            <fieldset className="fieldset lg:col-span-2">
              <legend className="fieldset-legend">Recipe Details*</legend>
              <textarea
                type="textarea"
                {...register("recipeDetails", { required: true })}
                className="textarea w-full max-h-52 min-h-52 input-lg"
                placeholder="Recipe Details"
              />
              {/* Error Message */}
              {errors.recipeDetails && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Image */}
            <fieldset className="fieldset lg:col-span-2">
              <legend className="fieldset-legend w-full">Cover*</legend>
              <div className="w-full">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-ghost"
                />
              </div>
              {/* Error Message */}
              {errors.image && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Submit Button */}
            <button
              className="btn btn-neutral shadow-none bg-secondary-500 w-fit lg:col-span-2 text-white border-0"
              type="submit"
            >
              <span>Add Item</span>
              {/* Utensils */}
              <FaUtensils />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
