import RequestCard from "../../../../components/RequestCard";
import axios from "../../../../../../utils/Axios";
import { Link } from "react-router-dom";

const RecentRequest = () => {
  const requests = axios.get("requests");

  return (
    <div>
      <h2 className="font-bold text-4xl mb-6 md:mb-10 text-primary">
        <Link to="request" className="link-hover">
          Request ({15})
        </Link>
      </h2>
      <div className="flex flex-col gap-2">
        {requests.map((request, idx) => (
          <RequestCard key={idx} {...{ request, idx }} />
        ))}
      </div>
    </div>
  );
};

export default RecentRequest;
