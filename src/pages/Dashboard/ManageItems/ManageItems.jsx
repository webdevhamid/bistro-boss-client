import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecureInstance = useAxiosSecure();
  //   const queryClient = useQueryClient();

  const handleDeleteItem = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const { data } = await axiosSecureInstance.delete(`/menu/${id}`);
      console.log(data);

      if (data.deletedCount === 1) {
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });

        //   Refetch Remaining menu
        // queryClient.invalidateQueries({ queryKey: ["menu"] });
        refetch();
      }
    }
  };

  const handleUpdateItem = (id) => {
    console.log(id);
  };
  return (
    <div>
      {/* Section Title */}
      <SectionTitle heading={"Manage all items"} subHeading={"hurry up!"} />

      {/* Main Container */}
      <div className="bg-white p-10 rounded-lg">
        {/* Display total menu */}
        <h2 className="text-3xl font-semibold">Total Items: {menu?.length}</h2>

        {/* Items Table */}
        <div className="overflow-x-auto rounded-box border-base-content/5 bg-base-100 mt-5">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-secondary-500 text-white">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* User Info */}
              {menu?.map((item, i) => (
                <tr key={item._id}>
                  {/* Row Serial */}
                  <th>{i + 1}</th>
                  {/* Item Image */}
                  <td>
                    <img src={item?.image} alt="" className="w-20 h-20 object-cover" />
                  </td>
                  {/* Item Name */}
                  <td>{item?.name}</td>
                  {/* Item Price */}
                  <td>${item?.price}</td>
                  {/* item Edit button */}
                  <td>
                    <button
                      onClick={() => handleUpdateItem(item?._id)}
                      className="btn bg-secondary-500 text-white"
                    >
                      <FaRegEdit className="text-xl" />
                    </button>
                  </td>
                  {/* Item Delete button */}
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item?._id)}
                      className="btn bg-red-500 inline-flex items-center justify-center p-3 hover:bg-red-600 transition"
                    >
                      <FaTrashAlt className="text-white text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
