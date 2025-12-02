import { useEffect, useState } from "react";
import { apiGDG } from "../../../../services/api.gdg";
import { deleteUsersList } from "../../../../services/deleteUsrers";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function UsersDisplayList() {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getUsersList() {
    try {
      const options = {
        method: "GET",
        url: `/get_admins`,
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data } = await apiGDG.request(options);
      setLoading(false);
      setUsers(data.admins);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(
        error?.message || "Failed to fetch users list"
      );      
    }
  }

  const handleDelete = async (user) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-green-500 hover:bg-green-600 text-white font-bold m-3 py-2 px-4 rounded-lg shadow-md transition-all duration-200",
        cancelButton:
          "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-200",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await deleteUsersList(user.username, user._id); // حذف من الـ backend
        setUsers((prev) => prev.filter((u) => u._id !== user._id)); // تحديث الـ UI فورًا

        await swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
      } catch (err) {
        console.error(err);
        await swalWithBootstrapButtons.fire({
          title: "Failed!",
          text: "Failed to delete user.",
          icon: "error",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      await swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "User is safe :)",
        icon: "info",
      });
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-gray-500 text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Users List
      </h3>

      <div className="space-y-5">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/*//^ User Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
              <span className="text-gray-900 font-semibold sm:w-1/3 text-lg truncate">
                {user.username}
              </span>
              <span className="text-indigo-600 font-medium sm:w-1/3 text-base">
                {user.role}
              </span>
            </div>

            {/*//~! Delete Button */}
            <button
              onClick={() => handleDelete(user)}
              className="mt-3 sm:mt-0 bg-linear-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-2xl font-bold 
            hover:scale-105 hover:from-red-600 hover:to-red-700 active:scale-95 transition-all duration-300 shadow-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
