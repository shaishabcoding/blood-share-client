import moment from "moment";
import Swal from "sweetalert2";

const RequestTable = ({ requests }) => {
  return (
    <div className="overflow-x-auto rounded-md border">
      <table className="table table-xs md:table-md table-pin-rows table-pin-cols table-zebra bg-white">
        <thead>
          <tr>
            <th></th>
            <th>Logo</th>
            <th>Patient Name</th>
            <th>Blood Group</th>
            <th>Location</th>
            <th>Last Donate</th>
            <th>Type</th>
            <th>Contact Number</th>
            <th>Contact Email</th>
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
                <td>
                  {request.quantity < 1
                    ? "This is first donation"
                    : moment(request?.lastDonate).fromNow()}
                </td>
                <td>{request?.type}</td>
                <td>{request?.contactNumber}</td>
                <td>{request?.contactEmail}</td>
                <td>{request?.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "Description",
                        text: request?.description,
                        icon: "info",
                        confirmButtonText: "Done",
                      });
                    }}
                    className="btn btn-info btn-xs"
                  >
                    Description
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
