import moment from "moment";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdBloodtype, MdEmail } from "react-icons/md";

const DonarCard = ({ donar, idx }) => {
  return (
    <div
      className={`overflow-visible border border-gray-300 h-fit relative rounded-md ${
        idx % 2 ? "bg-gradient-to-tl" : "bg-gradient-to-bl"
      } from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500`}
    >
      <div className="collapse collapse-arrow join-item rounded-none overflow-visible">
        <input type="radio" name="donar-accordion" />
        <div className="collapse-title">
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
                {donar.active && (
                  <div className="badge badge-accent text-white">active</div>
                )}
              </h3>
              <p className="flex gap-1 items-center">
                <span>
                  <MdBloodtype className="inline font-semibold" />{" "}
                  {donar.bloodGroup}
                </span>{" "}
                | <span className="font-semibold">Donations:</span>{" "}
                {donar.quantity}
              </p>
              <p>
                {donar.quantity < 1 ? (
                  <>
                    <span>This is first donation</span>
                  </>
                ) : (
                  <>
                    <span className="font-semibold">Last donation:</span>{" "}
                    {moment(donar.lastDonate).fromNow()}{" "}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="collapse-content px-0 dark:text-white border-t border-gray-300 dark:border-gray-500">
          <div className="px-4 pt-3">
            <p className="flex gap-2 items-center">
              <HiLocationMarker /> {donar?.location}
            </p>
            <p className="flex gap-2 items-center">
              <FaPhone />
              <a className="link-hover" href={`tel:${donar?.contactNumber}`}>
                {donar?.contactNumber}
              </a>
            </p>
            {donar?.contactEmail && (
              <p className="flex gap-2 items-center">
                <MdEmail />
                <a
                  className="link-hover"
                  href={`mailto:${donar?.contactEmail}`}
                >
                  {donar?.contactEmail}
                </a>
              </p>
            )}
          </div>
          <p className="border-t mt-2 pt-2 px-4 border-gray-300 dark:border-gray-500">
            {donar?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonarCard;
