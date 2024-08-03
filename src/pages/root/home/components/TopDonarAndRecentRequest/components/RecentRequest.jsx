import Countdown from "react-countdown";
import { BiDonateBlood } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";

const RecentRequest = () => {
  const requests = [
    {
      profile: {
        img: "logo.png",
        name: "John Doe",
        url: "https://example.com/profiles/johndoe",
      },
      isEmergency: true,
      bloodGroup: "A+",
      time: "2024-08-28T10:00:00Z",
      quantity: 500,
    },
    {
      profile: {
        img: "logo.png",
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
        img: "logo.png",
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
        img: "logo.png",
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
        img: "logo.png",
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
            className={`overflow-hidden border relative p-3 rounded-md hover:scale-95 ${
              idx % 2 ? "bg-gradient-to-bl" : "bg-gradient-to-tl"
            } from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500`}
          >
            <div className="h-full w-full flex items-center gap-2">
              <div className="avatar relative">
                <div className="w-16 mask mask-squircle z-10 bg-white dark:bg-gray-800">
                  <img src={request.profile.img} />
                </div>
                {request.isEmergency && (
                  <div className="w-16 h-16 bg-primary mask mask-squircle absolute animate-ping"></div>
                )}
              </div>
              <div className="grow">
                <h3 className="text-xl font-semibold">
                  {request.profile.name}{" "}
                  {request.isEmergency && (
                    <div className="badge badge-error">Urgent</div>
                  )}
                </h3>
                <p>
                  <span className="font-semibold">Group:</span>{" "}
                  {request.bloodGroup} |{" "}
                  <span className="font-semibold">Quantity:</span>{" "}
                  {request.quantity}
                  <br />
                  <span className="font-semibold">Time:</span>{" "}
                  <Countdown date={request.time}>
                    <span className="text-error font-bold">Over 😣</span>
                  </Countdown>
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
