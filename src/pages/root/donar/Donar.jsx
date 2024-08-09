import { Link } from "react-router-dom";
import DonarCard from "../components/DonarCard";
import { FaArrowAltCircleDown } from "react-icons/fa";
import useDonars from "../../../hooks/useDonars";

const Donar = () => {
  const [donars] = useDonars();
  console.log(donars);
  return (
    <div className="w-full lg:p-6 lg:px-0 px-2 lg:mx-0 lg:rounded-lg lg:my-6 my-1 py-6">
      <h2 className="text-2xl lg:mt-10 lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        All Donar ({donars?.length})
      </h2>
      <Link
        to="/dashboard/donation-profile"
        className="btn bg-primary-light dark:bg-primary-dark text-white"
      >
        <span className="mr-2">Donation Profile</span>
        <div className="-rotate-90 inline">
          <div className="text-xl animate-bounce">
            <FaArrowAltCircleDown />
          </div>
        </div>
      </Link>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:my-10 md:gap-4 px-1 my-6 gap-3 lg:gap-6 lg:px-0">
        {donars?.map((donar, idx) => (
          <DonarCard {...{ donar, idx }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Donar;
