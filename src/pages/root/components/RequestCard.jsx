import Countdown from "react-countdown";

const RequestCard = ({ request, idx }) => {
  return (
    <div
      className={`overflow-hidden border border-gray-300 h-fit relative rounded-md ${
        idx % 2 ? "bg-gradient-to-bl" : "bg-gradient-to-tl"
      } from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500`}
    >
      <div className="collapse collapse-arrow join-item rounded-none">
        <input type="radio" name="request-accordion" />
        <div className="collapse-title">
          <div className="h-full w-full flex items-center gap-2">
            <div className="avatar relative">
              <div className="w-16 mask mask-squircle z-10 bg-white dark:bg-gray-800">
                <img src={request?.img} />
              </div>
              {request?.type === "Emergency" && (
                <div className="w-16 h-16 bg-primary mask mask-squircle absolute animate-ping"></div>
              )}
            </div>
            <div className="grow">
              <h3 className="text-xl font-semibold">
                {request?.patientName}{" "}
                {request?.type === "Emergency" && (
                  <div className="badge badge-error text-white">Urgent</div>
                )}
              </h3>
              <p>
                <span className="font-semibold">Group:</span>{" "}
                {request?.bloodGroup} |{" "}
                <span className="font-semibold">Quantity:</span>{" "}
                {request?.quantity}
                <br />
                <span className="font-semibold">Time:</span>{" "}
                <Countdown date={request?.time}>
                  <span className="text-error font-bold">Over 😣</span>
                </Countdown>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse-content px-0 dark:text-gray-300 border-t border-gray-300 dark:border-gray-500">
          <div className="px-4">
            <p className="mt-4">
              <span className="font-semibold">Location:</span>{" "}
              {request?.location}
            </p>
            <p>
              <span className="font-semibold">Contact Number:</span>{" "}
              {request?.contactNumber}
            </p>
            {request?.contactEmail && (
              <p>
                <span className="font-semibold">Contact Email:</span>{" "}
                {request?.contactEmail}
              </p>
            )}
          </div>
          <p className="border-t mt-2 pt-2 px-4 border-gray-300 dark:border-gray-500">
            {request?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
