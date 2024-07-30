import { BiDonateBlood } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";

const RecentRequest = () => {
  const requests = [
    {
      profile: {
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        name: "John Doe",
        url: "https://example.com/profiles/johndoe",
      },
      isEmergency: true,
      bloodGroup: "A+",
      time: "2024-07-28T10:00:00Z",
      quantity: 500,
    },
    {
      profile: {
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        name: "Jane Smith",
        url: "https://example.com/profiles/janesmith",
      },
      isEmergency: false,
      bloodGroup: "O-",
      time: "2024-07-28T11:30:00Z",
      quantity: 450,
    },
    {
      profile: {
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        name: "Alice Johnson",
        url: "https://example.com/profiles/alicejohnson",
      },
      isEmergency: true,
      bloodGroup: "B+",
      time: "2024-07-28T13:00:00Z",
      quantity: 470,
    },
    {
      profile: {
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        name: "Bob Brown",
        url: "https://example.com/profiles/bobbrown",
      },
      isEmergency: false,
      bloodGroup: "AB-",
      time: "2024-07-28T14:45:00Z",
      quantity: 490,
    },
    {
      profile: {
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        name: "Charlie Davis",
        url: "https://example.com/profiles/charliedavis",
      },
      isEmergency: true,
      bloodGroup: "O+",
      time: "2024-07-28T16:15:00Z",
      quantity: 520,
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-4xl mb-6 md:mb-10 text-primary">
        Request <BiDonateBlood className="inline" />
      </h2>
      <div className="flex flex-col gap-2">
        {requests.map((request, idx) => (
          <div
            key={idx}
            className={`border relative p-3 rounded-md hover:scale-95 ${
              idx % 2 ? "bg-gradient-to-bl" : "bg-gradient-to-tl"
            } from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500`}
          >
            <div className="h-full w-full flex items-center gap-2">
              <div className="avatar">
                <div className="w-16 mask mask-squircle border">
                  <img src={request.profile.img} />
                </div>
              </div>
              <div className="grow">
                <h3 className="text-xl font-semibold">
                  {request.profile.name}
                  {request.isEmergency && (
                    <div className="badge badge-info ml-2">emergency</div>
                  )}
                </h3>
                <p>
                  <span className="font-semibold">Group:</span>{" "}
                  {request.bloodGroup} |{" "}
                  <span className="font-semibold">Quantity:</span>{" "}
                  {request.quantity}
                </p>
              </div>
              <div className="-rotate-90">
                <div className="text-3xl animate-bounce">
                  <FaArrowAltCircleDown />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentRequest;
