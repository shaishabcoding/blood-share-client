import { Link } from "react-router-dom";
import DonarCard from "../../../../components/DonarCard";
import useDonars from "../../../../../../hooks/useDonars";
const TopDonar = () => {
  const [{ donars }] = useDonars();

  return (
    <div>
      <h2 className="font-bold text-4xl mb-6 md:mb-10 text-primary">
        <Link to="donar" className="link-hover">
          Donar ({donars?.length})
        </Link>
      </h2>
      <div className="flex flex-col gap-2">
        {donars?.slice(0, 5).map((donar, idx) => (
          <DonarCard {...{ donar, idx }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default TopDonar;
