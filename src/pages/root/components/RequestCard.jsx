import Countdown from "react-countdown";
import { FaArrowAltCircleDown } from "react-icons/fa";

const RequestCard = ({ request, idx }) => {
  return (
    <div
      className={`overflow-hidden border relative p-3 rounded-md hover:scale-95 ${
        idx % 2 ? "bg-gradient-to-bl" : "bg-gradient-to-tl"
      } from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500`}
    >
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
            <span className="font-semibold">Group:</span> {request?.bloodGroup}{" "}
            | <span className="font-semibold">Quantity:</span>{" "}
            {request?.quantity}
            <br />
            <span className="font-semibold">Time:</span>{" "}
            <Countdown date={request?.time}>
              <span className="text-error font-bold">Over 😣</span>
            </Countdown>
          </p>
        </div>
        <div className="-rotate-90">
          <div className="text-3xl animate-bounce">
            <FaArrowAltCircleDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;