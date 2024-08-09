import moment from "moment";
import { FaArrowAltCircleDown } from "react-icons/fa";

const DonarCard = ({ donar, idx }) => {
  return (
    <div
      className={`border p-3 rounded-md hover:scale-95 ${
        idx % 2 ? "bg-gradient-to-tl" : "bg-gradient-to-bl"
      } from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500`}
    >
      <div className="h-full w-full flex items-center gap-2">
        <div className="avatar relative">
          <div className="w-16 mask mask-squircle bg-white dark:bg-gray-800">
            <img src={donar.img} />
          </div>
          {idx === 0 && (
            <div className="w-12 absolute -top-6 -left-6 -rotate-45">
              <img src="/crown.png" />
            </div>
          )}
        </div>
        <div className="grow">
          <h3 className="text-xl font-semibold">
            {donar.donarName}{" "}
            {donar.isActive && (
              <div className="badge badge-accent text-white">active</div>
            )}
          </h3>
          <p>
            <span className="font-semibold">Group:</span> {donar.bloodGroup} |{" "}
            <span className="font-semibold">Quantity:</span> {donar.quantity}
            <br />
            <span className="font-semibold">Last donation:</span>{" "}
            {moment(donar.time).fromNow()}
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

export default DonarCard;
