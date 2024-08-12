import moment from "moment";
import Swal from "sweetalert2";

const DonarTable = ({ donars }) => {
  return (
    <div className="overflow-x-auto rounded-md border">
      <table className="table table-xs md:table-md table-pin-rows table-pin-cols table-zebra bg-white">
        <thead>
          <tr>
            <th></th>
            <th>Logo</th>
            <th>Donar Name</th>
            <th>Blood Group</th>
            <th>Location</th>
            <th>Last Donate</th>
            <th>Active</th>
            <th>Contact Number</th>
            <th>Contact Email</th>
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
                <td>
                  {donar.quantity < 1
                    ? "This is first donation"
                    : moment(donar?.lastDonate).fromNow()}
                </td>
                <td>{donar?.active?.toString()}</td>
                <td>{donar?.contactNumber}</td>
                <td>{donar?.contactEmail}</td>
                <td>{donar?.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "Description",
                        text: donar?.description,
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

export default DonarTable;
