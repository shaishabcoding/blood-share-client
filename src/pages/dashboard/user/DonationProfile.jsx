import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../../shared/loading/Loading";
import { BiSolidDonateBlood } from "react-icons/bi";
import usePrivateClient from "../../../hooks/usePrivateClient";
import useAuth from "../../../hooks/useAuth";
import useDonationProfile from "../../../hooks/useDonationProfile";
import { useEffect } from "react";
import moment from "moment";

const DonationProfile = () => {
  const privateClient = usePrivateClient();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [donationProfile, refetch] = useDonationProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      contactEmail: user?.email,
      donarName: user?.displayName,
      img: user?.photoURL,
      active: true,
      lastDonate: moment().subtract(56, "days").format("YYYY-MM-DDTHH:mm"),
    },
  });

  useEffect(() => {
    if (donationProfile) {
      const newProfile = { ...donationProfile };
      reset(newProfile);
    }
  }, [donationProfile, reset]);

  const handleFormSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const res = await privateClient.patch("/donation-profile", data);

    if (res.data.modifiedCount > 0 || res.data.upsertedCount > 0) {
      reset();
      refetch();
      Swal.fire({
        title: "Success",
        text: "Update successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
    }
    setLoading(false);
  });

  return (
    <div className="w-full lg:p-6 px-2 lg:mx-0 lg:rounded-lg lg:mt-6">
      <h2 className="text-2xl lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        Donation Profile
      </h2>
      <div className="w-full mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.donarName ? "border-red-500" : ""
                }`}
              >
                Donar Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter donar name"
                  {...register("donarName", {
                    required: "Please enter donar name",
                  })}
                />
              </label>
              {errors.donarName && (
                <p className="text-red-500">{errors.donarName.message}</p>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.bloodGroup ? "border-red-500" : ""
                }`}
              >
                Blood Group
                <select
                  defaultValue="default"
                  {...register("bloodGroup", {
                    required: "Please select a blood Group",
                    validate: (value) =>
                      value !== "default" || "Please select a blood Group",
                  })}
                  className="grow border-0 outline-0 bg-transparent dark:bg-gray-500 dark:text-gray-200"
                >
                  <option hidden disabled value="default">
                    Select a blood group
                  </option>
                  {bloodGroups.map((blood, idx) => (
                    <option key={idx} value={blood}>
                      {blood}
                    </option>
                  ))}
                </select>
              </label>
              {errors.bloodGroup && (
                <p className="text-red-500">{errors.bloodGroup.message}</p>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.donations ? "border-red-500" : ""
                }`}
              >
                Active
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  {...register("active")}
                />
              </label>
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.quantity ? "border-red-500" : ""
                }`}
              >
                Quantity
                <input
                  defaultValue={0}
                  type="number"
                  className="grow"
                  placeholder="Enter Donation Quantity [e.g.: 2]"
                  {...register("quantity", {
                    valueAsNumber: true,
                    required: "Please enter donation quantity",
                  })}
                />
              </label>
              {errors.quantity && (
                <p className="text-red-500">{errors.quantity.message}</p>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.lastDonate ? "border-red-500" : ""
                }`}
              >
                Last donate
                <input
                  type="datetime-local"
                  className="grow"
                  placeholder="Enter donation date"
                  {...register("lastDonate", {
                    required: "Please enter last donation date",
                  })}
                />
              </label>
              {errors.lastDonate && (
                <p className="text-red-500">{errors.lastDonate.message}</p>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.location ? "border-red-500" : ""
                }`}
              >
                Location
                <input
                  className="grow"
                  placeholder="Enter location"
                  {...register("location", {
                    required: "Please enter location",
                  })}
                />
              </label>
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.contactNumber ? "border-red-500" : ""
                }`}
              >
                Contact Number
                <input
                  type="tel"
                  className="grow"
                  placeholder="Enter contact number"
                  {...register("contactNumber", {
                    required: "Please enter contact number",
                  })}
                />
              </label>
              {errors.contactNumber && (
                <p className="text-red-500">{errors.contactNumber.message}</p>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.likes ? "border-red-500" : ""
                }`}
              >
                Contact Email
                <input
                  className="grow"
                  type="email"
                  placeholder="Enter contact Email"
                  {...register("contactEmail", {
                    required: false,
                  })}
                />
              </label>
              {errors.likes && (
                <p className="text-red-500">{errors.likes.message}</p>
              )}
            </div>
            <label className="input hidden input-bordered items-center gap-2 dark:bg-gray-500 dark:border-gray-400">
              Img
              <input
                type="text"
                className="grow cursor-not-allowed"
                {...register("img")}
                disabled
              />
            </label>
          </div>
          <div>
            <textarea
              {...register("description", {
                required: "Please enter a description",
              })}
              className={`textarea textarea-bordered w-full h-40 mt-2 dark:bg-gray-500 dark:border-gray-400 ${
                errors.description ? "border-red-500" : ""
              }`}
              placeholder="Enter description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <button
            disabled={loading}
            className="btn bg-primary-light mt-2 text-white dark:bg-primary-dark w-full"
            type="submit"
          >
            {loading ? (
              <Loading className="my-0 text-primary" />
            ) : (
              <>
                Update <BiSolidDonateBlood />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationProfile;
