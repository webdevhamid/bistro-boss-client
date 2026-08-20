import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  // Calculate total product price
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = total.toFixed(2);
  const axiosInstance = useAxiosSecure();

  const handleDelete = async (id) => {
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
        const data = await axiosInstance.delete(`/carts/${id}`);
        refetch();

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {/* Section Title */}
      <SectionTitle heading={"Wanna add more?"} subHeading={"My cart"} />

      <div className="bg-white p-10">
        {/* Cart management */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl uppercase">
            Total Orders: <span className="font-semibold">{cart.length}</span>
          </h1>
          <h1 className="text-2xl uppercase">
            Total Price: <span className="font-semibold">${totalPrice}</span>
          </h1>
          <button className="btn bg-secondary-500 text-white w-[100px]">Pay</button>
        </div>

        {/* Cart Table */}
        <div className="overflow-x-auto mt-8">
          <table className="table rounded-tl-2xl rounded-tr-2xl overflow-hidden">
            {/* head */}
            <thead className="bg-secondary-500 text-white h-14 py-5">
              <tr className="uppercase">
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="w-16 h-16">
                      <img
                        src={item.image}
                        alt={item.recipeName}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </td>
                  <td className="font-semibold">{item.recipeName}</td>
                  <td className="font-semibold">${item.price}</td>
                  <td>
                    {/* Cart Delete Button */}
                    <button
                      onClick={() => handleDelete(item._id)}
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

export default Cart;
