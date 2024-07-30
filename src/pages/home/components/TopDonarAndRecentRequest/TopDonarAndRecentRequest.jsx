import RecentRequest from "../TopDonarAndRecentRequest/components/RecentRequest";
import TopDonar from "../TopDonarAndRecentRequest/components/TopDonar";
const TopDonarAndRecentRequest = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:my-24 md:gap-4 px-3 my-10 gap-10">
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
