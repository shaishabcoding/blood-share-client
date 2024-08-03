import { useForm } from "react-hook-form";
// import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../utils/Axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../../../shared/loading/Loading";
import { BiSolidDonateBlood } from "react-icons/bi";

const NewRequest = () => {
  // const { user } = useAuth();
  const { user } = {
    user: {
      displayName: "Shaishab Chandra Shil",
      email: "shaishab316@gmail.com",
      photoURL: "/logo.png",
    },
  }; /* ToDo: remove */

  const [loading, setLoading] = useState(false);
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: user?.email,
      contactEmail: user?.email,
      patientName: user?.displayName,
      img: user?.photoURL,
    },
  });

  const handleFormSubmit = handleSubmit(async (data) => {
    setLoading(true);
    console.log(data);
    const res = await axios.post("requests", data);
    if (res.data.insertedId) {
      reset();
      Swal.fire({
        title: "Success",
        text: "New Request successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
    }
    setLoading(false);
  });

  return (
    <div className="w-full lg:p-6 px-2 lg:mx-0 lg:rounded-lg lg:my-6 my-1 py-6 bg-gradient-to-bl from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500">
      <h2 className="text-2xl lg:mt-10 lg:mb-12 lg:text-5xl font-semibold text-center mb-6">
        New Blood Request
      </h2>
      <div className="w-full lg:px-12 mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.patientName ? "border-red-500" : ""
                }`}
              >
                Patient Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter patient name"
                  {...register("patientName", {
                    required: "Please enter patient name",
                  })}
                />
              </label>
              {errors.patientName && (
                <p className="text-red-500">{errors.patientName.message}</p>
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
                  errors.type ? "border-red-500" : ""
                }`}
              >
                Type
                <select
                  {...register("type", {
                    required: "Please select type",
                  })}
                  className="grow border-0 outline-0 bg-transparent dark:bg-gray-500 dark:text-gray-200"
                >
                  <option selected>Regular</option>
                  <option>Emergency</option>
                </select>
              </label>
              {errors.type && (
                <p className="text-red-500">{errors.type.message}</p>
              )}
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 dark:bg-gray-500 dark:border-gray-400 ${
                  errors.quantity ? "border-red-500" : ""
                }`}
              >
                Quantity
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Quantity [e.g.: 2]"
                  {...register("quantity", {
                    required: "Please enter quantity",
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
                  errors.time ? "border-red-500" : ""
                }`}
              >
                Time
                <input
                  type="datetime-local"
                  className="grow"
                  placeholder="Enter post time"
                  {...register("time", { required: "Please enter the time" })}
                />
              </label>
              {errors.time && (
                <p className="text-red-500">{errors.time.message}</p>
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
              Email
              <input
                type="email"
                className="grow cursor-not-allowed"
                {...register("email")}
                disabled
              />
            </label>
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
              className={`textarea textarea-bordered w-full h-40 my-2 dark:bg-gray-500 dark:border-gray-400 ${
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
            className="btn bg-primary-light text-white dark:bg-primary-dark w-full"
            type="submit"
          >
            {loading ? (
              <Loading className="my-0 text-primary" />
            ) : (
              <>
                Request <BiSolidDonateBlood />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRequest;
