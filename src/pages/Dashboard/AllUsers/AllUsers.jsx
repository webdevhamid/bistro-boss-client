import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useEffect } from "react";

const AllUsers = () => {
  const axiosSecureInstance = useAxiosSecure();
  const {
    data: users = [],
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecureInstance.get("/users");
      return data;
    },
  });

  const handleDeleteUser = async (id) => {
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
      const { data } = await axiosSecureInstance.delete(`/users/${id}`);

      if (data.deletedCount === 1) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        refetch();
      }
    }
  };

  // Make admin handler
  const handleMakeAdmin = async (id) => {
    const result = await Swal.fire({
      title: "Make him admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    });

    if (result.isConfirmed) {
      const { data } = await axiosSecureInstance.patch(`/users/admin/${id}`);
      console.log(data);

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "User successfully became an admin",
          icon: "success",
        });
        refetch();
      }
    }

    console.log(id);
  };
  return (
    <div>
      {/* Section Title */}
      <SectionTitle heading={"Manage All Users"} subHeading={"How many??"} />

      {/* Main Block */}
      <div className="bg-white p-10 rounded-lg">
        {/* Display total users */}
        <h2 className="text-3xl">
          Total Users: <span className="font-semibold">{users.length}</span>
        </h2>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-box border-base-content/5 bg-base-100 mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-secondary-500 text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* User Info */}
              {users?.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  {/* User Role button */}
                  <td>
                    {user?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <div className="tooltip" data-tip="Make Admin">
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn bg-secondary-500 inline-flex items-center justify-center p-3 hover:bg-red-600 transition"
                        >
                          <FaUsers className="text-white text-xl" />
                        </button>
                      </div>
                    )}
                  </td>
                  {/* User "DELETE" Action button */}
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user?._id)}
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

export default AllUsers;
