import { Link } from "react-router-dom";
import DonarCard from "../components/DonarCard";
import { FaArrowAltCircleDown } from "react-icons/fa";
import useDonars from "../../../hooks/useDonars";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const Donar = () => {
  const [query] = useSearchParams();
  const { register, handleSubmit, reset } = useForm();
  const [location, setLocation] = useState(query?.get("location") || "");
  const [bloodGroup, setBloodGroup] = useState(
    query?.get("bloodGroup")?.replace(" ", "+") || ""
  );
  const [{ donars, donarsCount }] = useDonars({ location, bloodGroup });
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleFormSubmit = handleSubmit(({ bloodGroup, location }) => {
    setBloodGroup(bloodGroup);
    setLocation(location);
    query?.set("location", location);
    query?.set("bloodGroup", bloodGroup);
  });

  return (
    <div className="w-full lg:p-6 lg:px-0 px-2 lg:mx-0 lg:rounded-lg lg:my-6 my-1 py-6">
      <h2 className="text-2xl lg:mt-10 lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        All Donar ({donars?.length}/{donarsCount})
      </h2>
      <Link
        to="/dashboard/donation-profile"
        className="btn bg-primary-light dark:bg-primary-dark text-white btn-sm md:btn-md"
      >
        <span className="mr-2">Donation Profile</span>
        <div className="-rotate-90 inline">
          <div className="text-xl animate-bounce">
            <FaArrowAltCircleDown />
          </div>
        </div>
      </Link>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center md:justify-center gap-4 mb-4 lg:mb-8 my-4 justify-start"
      >
        <div className="w-fit">
          <div className="w-full flex">
            <input
              defaultValue={location}
              {...register("location")}
              className="input dark:bg-gray-500 dark:text-white rounded-none rounded-tl-md input-bordered input-sm md:input-md"
              placeholder="Enter location"
            />
            <select
              {...register("bloodGroup")}
              defaultValue={bloodGroup}
              className="select dark:bg-gray-500 dark:text-white grow select-bordered rounded-none rounded-tr-md select-sm md:select-md"
            >
              <option hidden disabled value="">
                Blood Group
              </option>
              <option value="">All Group</option>
              {bloodGroups.map((blood, idx) => (
                <option key={idx} value={blood}>
                  {blood}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex">
            <button
              onClick={() => {
                reset();
                setLocation("");
                setBloodGroup("");
                query.delete("location");
                query.delete("bloodGroup");
              }}
              className="btn bg-red-400 dark:bg-gray-500 text-white w-fit aspect-square btn-bordered rounded-none rounded-b-md rounded-br-none btn-sm md:btn-md"
              placeholder="Search meals"
            >
              X
            </button>
            <button
              type="submit"
              className="btn bg-sky-400 dark:bg-gray-500 text-white grow btn-bordered rounded-none rounded-b-md rounded-bl-none btn-sm md:btn-md"
              placeholder="Search meals"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:my-10 md:gap-4 px-1 my-6 gap-3 lg:gap-6 lg:px-0">
        {donars?.map((donar, idx) => (
          <DonarCard {...{ donar, idx }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Donar;
