import { Link } from "react-router-dom";
import RequestCard from "../components/RequestCard";
import { FaArrowAltCircleDown } from "react-icons/fa";
import useRequests from "../../../hooks/useRequests";

const Request = () => {
  const [requests] = useRequests();

  return (
    <div className="w-full lg:p-6 lg:px-0 px-2 lg:mx-0 lg:rounded-lg lg:my-6 my-1 py-6">
      <h2 className="text-2xl lg:mt-10 lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        All Request ({requests?.length || 0})
      </h2>
      <Link
        to="/dashboard/blood-request"
        className="btn bg-primary-light dark:bg-primary-dark text-white"
      >
        <span className="mr-2">New Blood Request</span>
        <div className="-rotate-90 inline">
          <div className="text-xl animate-bounce">
            <FaArrowAltCircleDown />
          </div>
        </div>
      </Link>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:my-10 md:gap-4 px-1 my-6 gap-3 lg:gap-6 lg:px-0">
        {requests?.map((request, idx) => (
          <RequestCard {...{ request, idx }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Request;
