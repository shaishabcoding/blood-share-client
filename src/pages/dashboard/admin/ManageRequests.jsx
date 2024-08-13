import usePrivateClient from "../../../hooks/usePrivateClient";
import Swal from "sweetalert2";
import { useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useRequests from "../../../hooks/useRequests";
const ManageRequests = () => {
  const [{ requests, requestsCount }, refetch] = useRequests();
  const privateClient = usePrivateClient();
  const [deleteLoading, setDeleteLoading] = useState([false, ""]);

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
        privateClient.delete(`/admin/requests/${id}`).then(({ data }) => {
          if (data.deletedCount > 0) {
            refetch();
            setDeleteLoading([false, id]);
            toast.success("Request delete successfully!");
          } else {
            toast.error("Failed to delete");
          }
        });
      }
      setDeleteLoading([false, id]);
    });
  };

  return (
    <div className="w-full lg:p-6 px-2 lg:mx-0 lg:rounded-lg lg:mt-6">
      <h2 className="text-2xl lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        All Requests ({requestsCount})
      </h2>
      <div className="overflow-x-auto rounded-md border">
        <table className="table table-xs md:table-md table-pin-rows table-pin-cols table-zebra bg-white">
          <thead>
            <tr>
              <th></th>
              <th>Logo</th>
              <th>Name</th>
              <th>Group</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests?.map((request, idx) => {
              return (
                <tr
                  key={idx}
                  className="dark:bg-gray-400 dark:text-white dark:even:text-gray-700"
                >
                  <th className="dark:text-black dark:odd:bg-gray-400">
                    {idx + 1}
                  </th>
                  <td className="overflow-hidden">
                    <div className="avatar drop-shadow-md relative flex items-center">
                      <div className="w-10 mask mask-squircle z-10 bg-white dark:bg-gray-800">
                        <img src={request?.img} />
                      </div>
                      {request?.type === "Emergency" && (
                        <div className="w-10 h-10 bg-primary mask mask-squircle absolute animate-ping"></div>
                      )}
                    </div>
                  </td>
                  <td>{request?.patientName}</td>
                  <td>{request?.bloodGroup}</td>
                  <td>{request?.location}</td>
                  <td title={request?.email}>
                    {request?.contactNumber}{" "}
                    {request?.contactEmail || request?.email}
                  </td>
                  <td>{request?.quantity}</td>
                  <td>
                    <button
                      disabled={
                        deleteLoading[0] && deleteLoading[1] === request?._id
                      }
                      onClick={() => handleDelete(request?._id)}
                      title="delete"
                      className="btn text-white disabled:text-primary btn-error btn-xs  md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                    >
                      {deleteLoading[0] && deleteLoading[1] === request?._id ? (
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

export default ManageRequests;
