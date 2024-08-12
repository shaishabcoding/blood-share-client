import usePrivateClient from "../../../hooks/usePrivateClient";
import Swal from "sweetalert2";
import { useState } from "react";
import { toast } from "react-toastify";
import useDonars from "../../../hooks/useDonars";
import { RiDeleteBin6Fill } from "react-icons/ri";
const ManageDonars = () => {
  const [{ donars, donarsCount }, refetch] = useDonars();
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
        privateClient.delete(`/donars/${id}`).then(({ data }) => {
          if (data.deletedCount > 0) {
            refetch();
            setDeleteLoading([false, id]);
            Swal.fire({
              title: "Success",
              text: "Donars delete successfully!",
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
        All Donars ({donarsCount})
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
              <th>Donations</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donars?.map((donar, idx) => {
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
                        <img src={donar?.img} />
                      </div>
                      {idx === 0 && (
                        <div className="w-6 absolute -top-3 -left-3 -rotate-45">
                          <img src="/crown.png" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td>{donar?.donarName}</td>
                  <td>{donar?.bloodGroup}</td>
                  <td>{donar?.location}</td>
                  <td title={donar?.email}>
                    {donar?.contactNumber} {donar?.contactEmail || donar?.email}
                  </td>
                  <td>{donar?.quantity}</td>
                  <td>
                    <button
                      disabled={
                        deleteLoading[0] && deleteLoading[1] === donar?._id
                      }
                      onClick={() => handleDelete(donar?._id)}
                      title="delete"
                      className="btn text-white disabled:text-primary btn-error btn-xs  md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                    >
                      {deleteLoading[0] && deleteLoading[1] === donar?._id ? (
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

export default ManageDonars;
