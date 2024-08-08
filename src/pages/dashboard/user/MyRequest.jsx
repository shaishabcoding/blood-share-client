import { RiDeleteBin6Fill } from "react-icons/ri";
import useBloodRequests from "../../../hooks/useBloodRequests";
const MyRequest = () => {
  const requests = useBloodRequests();
  return (
    <div className="w-full lg:p-6 px-2 lg:mx-0 lg:rounded-lg lg:mt-6">
      <h2 className="text-2xl lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        My Request
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
            {requests.map((request, idx) => {
              const { patientName, bloodGroup, quantity, location } = request;
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
                      title="delete"
                      className="btn text-white disabled:text-primary btn-error btn-xs md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                    >
                      <RiDeleteBin6Fill />
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
