import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);
  // Calculate total product price
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = total.toFixed(2);
  console.log(totalPrice);

  return (
    <div>
      {/* Subtitle */}
      <SectionTitle heading={"Wanna add more?"} subHeading={"My cart"} />

      <div className="bg-white p-10">
        {/* Cart management */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl uppercase font-semibold">Total Orders: {cart.length}</h1>
          <h1 className="text-2xl uppercase font-semibold">Total Price: ${totalPrice}</h1>
          <button className="btn bg-secondary-500 text-white">Pay</button>
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
                    <button className="btn bg-red-500 inline-flex items-center justify-center p-3 hover:bg-red-600 transition">
                      <FaTrashAlt className="text-white text-2xl" />
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
