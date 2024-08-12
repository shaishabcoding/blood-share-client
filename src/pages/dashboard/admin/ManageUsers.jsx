import { RiDeleteBin6Fill } from "react-icons/ri";
import usePrivateClient from "../../../hooks/usePrivateClient";
import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaUserPlus } from "react-icons/fa";
const ManageUsers = () => {
  const [{ users, usersCount }, refetch] = useUsers();
  const privateClient = usePrivateClient();
  const [deleteLoading, setDeleteLoading] = useState([false, ""]);
  const [adminLoading, setAdminLoading] = useState([false, ""]);

  const handleDelete = (id) => {
    setDeleteLoading([true, id]);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        privateClient.delete(`/users/${id}`).then(({ data }) => {
          if (data.deletedCount > 0) {
            refetch();
            setDeleteLoading([false, id]);
            Swal.fire({
              title: "Success",
              text: "User delete successfully!",
              icon: "success",
              confirmButtonText: "Done",
            });
          } else {
            toast.error("Failed to delete");
          }
        });
      }
      setDeleteLoading([false, id]);
    });
  };

  const handleUserAdmin = (email, id) => {
    setAdminLoading([true, id]);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        privateClient.put(`/users/admin/${email}`).then(({ data }) => {
          if (data.modifiedCount > 0) {
            refetch();
            setAdminLoading([false, id]);
            toast.success("Successful");
          } else {
            toast.error("Failed to make admin");
          }
        });
      }
      setAdminLoading([false, id]);
    });
  };
  return (
    <div className="w-full lg:p-6 px-2 lg:mx-0 lg:rounded-lg lg:mt-6">
      <h2 className="text-2xl lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        All Users ({usersCount})
      </h2>
      <div className="overflow-x-auto rounded-md border">
        <table className="table table-xs md:table-md table-pin-rows table-pin-cols table-zebra bg-white">
          <thead>
            <tr>
              <th></th>
              <th>Logo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => {
              return (
                <tr
                  key={idx}
                  className="dark:bg-gray-400 dark:text-white dark:even:text-gray-700"
                >
                  <th className="dark:text-black dark:odd:bg-gray-400">
                    {idx + 1}
                  </th>
                  <td>
                    <div className="avatar drop-shadow-md relative z-[1] flex items-center">
                      <div className="w-10 mask mask-squircle bg-white">
                        <img src={user?.image} />
                      </div>
                      {user?.role === "admin" && (
                        <div className="w-6 absolute -top-3 -left-3 -rotate-45">
                          <img src="/crown.png" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        disabled={
                          adminLoading[0] && adminLoading[1] === user?._id
                        }
                        onClick={() => handleUserAdmin(user?.email, user?._id)}
                        title="Make admin"
                        className="btn text-white btn-info btn-xs  md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                      >
                        {adminLoading[0] && adminLoading[1] === user?._id ? (
                          <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                          <FaUserPlus />
                        )}
                      </button>
                    )}
                  </td>
                  <td className="flex gap-2 w-fit">
                    <button
                      disabled={
                        deleteLoading[0] && deleteLoading[1] === user?._id
                      }
                      onClick={() => handleDelete(user?._id)}
                      title="delete"
                      className="btn text-white disabled:text-primary btn-error btn-xs  md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                    >
                      {deleteLoading[0] && deleteLoading[1] === user?._id ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        <RiDeleteBin6Fill />
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
