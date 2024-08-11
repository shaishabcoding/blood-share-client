import RequestCard from "../../../../components/RequestCard";
import useRequests from "../../../../../../hooks/useRequests";
import { Link } from "react-router-dom";

const RecentRequest = () => {
  const [{ requests, requestsCount }] = useRequests();

  console.log(requests);
  return (
    <div>
      <h2 className="font-bold text-4xl mb-6 md:mb-10 text-primary">
        <Link to="request" className="link-hover">
          Request ({requestsCount})
        </Link>
      </h2>
      <div className="flex flex-col gap-2">
        {requests?.slice(0, 5).map((request, idx) => (
          <RequestCard key={idx} {...{ request, idx }} />
        ))}
      </div>
    </div>
  );
};

export default RecentRequest;
