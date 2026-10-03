import { useLoaderData, useNavigate } from "react-router";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// ImgBB API Keys
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const UpdateItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { category, image, name, price, recipe, _id } = useLoaderData() || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const selectedImage = watch("image");
  const [previewImage, setPreviewImage] = useState(image);
  let imageURL = image;
  const navigate = useNavigate();

  // Image preview
  useEffect(() => {
    // If user does not select any image
    if (!selectedImage?.[0]) {
      setPreviewImage(image);
      return;
    }

    // Upon user image selection, create a temp image obj URL
    const objectURL = URL.createObjectURL(selectedImage[0]);

    // Change the previewImage state
    setPreviewImage(objectURL);

    // Cleanup when image changes or component unmounts
    return () => {
      URL.revokeObjectURL(objectURL);
    };
  }, [selectedImage, image]);

  const onSubmit = async (data) => {
    // Destructured input names from data object
    const { recipeName, category, price, recipeDetails, image } = data;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Image upload to ImgBB and then get an URL
        // Upload the image only if the user selects a new image
        if (selectedImage?.length > 0) {
          const imageFile = {
            image: selectedImage[0],
          };

          const res = await axiosPublic.post(imageHostingURL, imageFile, {
            // Required for image upload
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          imageURL = res.data.data.display_url;
        }

        const updatedMenuItem = {
          name: recipeName,
          recipe: recipeDetails,
          image: imageURL,
          category: category.toLowerCase(),
          price: parseFloat(price),
        };

        console.log(updatedMenuItem);

        const res = await axiosSecure.patch(`/menu/${_id}`, updatedMenuItem);
        console.log(res);

        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        navigate("/dashboard/manageItems");
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"update item"} subHeading={"Need Changes?"} />

      {/* Form */}
      <div className="bg-base-300 w-full shrink-0 rounded p-4 relative">
        {/* Spinner */}
        {/* {loading && (
          <div className="absolute left-1/2 transform -translate-1/2 top-1/2">
            <Spinner />
          </div>
        )} */}
        <div className="card-body">
          <form
            className="fieldset lg:grid-cols-2 grid-cols-1 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Recipe Name */}
            <fieldset className="fieldset lg:col-span-2">
              <legend className="fieldset-legend">Recipe Name</legend>
              <input
                type="text"
                className="input w-full input-lg"
                placeholder="Recipe Name"
                defaultValue={name}
                {...register("recipeName", { required: true })}
              />
              {/* Error Message */}
              {errors.recipeName && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Category */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>

              <select
                className="select select-lg w-full"
                defaultValue={category}
                {...register("category", { required: true })}
              >
                <option value="">Choose a category</option>
                <option>salad</option>
                <option>pizza</option>
                <option>soup</option>
                <option>dessert</option>
                <option>drinks</option>
                <option>offered</option>
              </select>
              {/* Error Message */}
              {errors.category && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Price */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price</legend>
              <input
                type="text"
                className="input w-full input-lg"
                placeholder="Price"
                defaultValue={price}
                {...register("price", { required: true })}
              />
              {/* Error Message */}
              {errors.price && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Recipe Details */}
            <fieldset className="fieldset lg:col-span-2">
              <legend className="fieldset-legend">Recipe Details</legend>
              <textarea
                type="textarea"
                {...register("recipeDetails", { required: true })}
                className="textarea w-full max-h-52 min-h-52 input-lg"
                placeholder="Recipe Details"
                defaultValue={recipe}
              />
              {/* Error Message */}
              {errors.recipeDetails && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )}
            </fieldset>
            {/* Image */}
            <fieldset className="fieldset lg:col-span-2">
              <legend className="fieldset-legend w-full">Update Cover</legend>
              <div className="w-full flex items-center gap-3">
                <input
                  type="file"
                  {...register("image")}
                  accept="image/*"
                  className="file-input file-input-ghost"
                />
                <img src={previewImage} className="w-20 h-20 object-cover" alt="" />
              </div>
              {/* Error Message */}
              {/* {errors.image && (
                <span className="text-red-600 font-semibold">This field is required</span>
              )} */}
            </fieldset>
            {/* Submit Button */}
            <button
              className="btn btn-neutral shadow-none bg-linear-to-r/srgb from-yellow-700 to-secondary-500 w-fit lg:col-span-2 text-white border-0"
              type="submit"
            >
              <span>Update Recipe Details</span>
              {/* Utensils */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
