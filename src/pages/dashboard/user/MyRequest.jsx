import { RiDeleteBin6Fill } from "react-icons/ri";
import usePrivateClient from "../../../hooks/usePrivateClient";
import Swal from "sweetalert2";
import useMyRequests from "../../../hooks/useMyRequests";
import { useState } from "react";
import { toast } from "react-toastify";
const MyRequest = () => {
  const [requests, refetch] = useMyRequests();
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
        privateClient.delete(`/requests/${id}`).then(({ data }) => {
          if (data.deletedCount > 0) {
            refetch();
            setDeleteLoading([false, id]);
            Swal.fire({
              title: "Success",
              text: "Blood request delete successfully!",
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
  return (
    <div className="w-full lg:p-6 px-2 lg:mx-0 lg:rounded-lg lg:mt-6">
      <h2 className="text-2xl lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        My Request ({requests?.length})
      </h2>
      <div className="overflow-x-auto rounded-md border">
        <table className="table table-xs md:table-md table-pin-rows table-pin-cols table-zebra bg-white">
          <thead>
            <tr>
              <th></th>
              <th>Patient Name</th>
              <th>Blood Group</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests?.map((request, idx) => {
              const { _id, patientName, bloodGroup, quantity, location } =
                request;
              return (
                <tr
                  key={idx}
                  className="dark:bg-gray-400 dark:text-white dark:even:text-gray-700"
                >
                  <th className="dark:text-black dark:odd:bg-gray-400">
                    {idx + 1}
                  </th>
                  <td>{patientName}</td>
                  <td>{bloodGroup}</td>
                  <td>{quantity}</td>
                  <td>{location}</td>
                  <td className="flex gap-2 w-fit">
                    <button
                      disabled={deleteLoading[0] && deleteLoading[1] === _id}
                      onClick={() => handleDelete(_id)}
                      title="delete"
                      className="btn text-white disabled:text-primary btn-error btn-xs  md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                    >
                      {deleteLoading[0] && deleteLoading[1] === _id ? (
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

export default MyRequest;
