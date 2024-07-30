import RecentRequest from "../TopDonarAndRecentRequest/components/RecentRequest";
import TopDonar from "../TopDonarAndRecentRequest/components/TopDonar";
const TopDonarAndRecentRequest = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 my-24 gap-4">
      <div className="">
        <RecentRequest />
      </div>
      <div className="">
        <TopDonar />
      </div>
    </div>
  );
};

export default TopDonarAndRecentRequest;
