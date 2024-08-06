import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/Axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  // const { user } = useAuth();
  const { user } = {
    user: {
      displayName: "Shaishab Chandra Shil",
      email: "shaishab316@gmail.com",
      photoURL: "/logo.png",
    },
  }; /* ToDo: remove */

  const [isDonationChecked, setDonationChecked] = useState(
    !!axios.get("isDonationChecked")
  );

  const handleCheckedChange = (e) => {
    setDonationChecked(e.target.checked);
    if (e.target.checked) {
      // navigate("donation-profile");
    }
  };

  return (
    <div className="lg:p-10 md:p-6">
      <img
        src={user.photoURL}
        className="w-[150px] aspect-square object-center rounded-full bg-gray-50 ring-4 mx-auto mb-6 dark:ring-gray-400"
      />
      <h3 className="text-2xl font-semibold font-sans">{user.displayName}</h3>
      <h3 className="text-lg font-sans">{user.email}</h3>
      <label className="label w-fit p-0 py-1">
        <span className="mr-2 text-lg font-sans font-semibold">
          Donation Profile
        </span>
        <input
          defaultChecked={isDonationChecked}
          className="checkbox checkbox-primary"
          type="checkbox"
          onChange={handleCheckedChange}
        />
      </label>
      <div className="flex gap-2 flex-wrap">
        {isDonationChecked && (
          <Link className="btn btn-info btn-sm mt-2">Donation Profile</Link>
        )}
        <btn className="btn btn-primary btn-sm mt-2">Change Password</btn>
      </div>
    </div>
  );
};

export default Profile;
