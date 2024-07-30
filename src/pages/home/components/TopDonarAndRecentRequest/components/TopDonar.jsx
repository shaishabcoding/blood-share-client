import { BiSolidDonateBlood } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";

const TopDonar = () => {
  const donars = [
    {
      bloodGroup: "A+",
      time: "2024-07-28T10:00:00Z",
      profile: {
        name: "John Doe",
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        url: "https://example.com/profiles/johndoe",
      },
      donationQuantity: 500,
    },
    {
      bloodGroup: "O-",
      time: "2024-07-28T11:30:00Z",
      profile: {
        name: "Jane Smith",
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        url: "https://example.com/profiles/janesmith",
      },
      donationQuantity: 450,
    },
    {
      bloodGroup: "B+",
      time: "2024-07-28T13:00:00Z",
      profile: {
        name: "Alice Johnson",
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        url: "https://example.com/profiles/alicejohnson",
      },
      donationQuantity: 470,
    },
    {
      bloodGroup: "AB-",
      time: "2024-07-28T14:45:00Z",
      profile: {
        name: "Bob Brown",
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        url: "https://example.com/profiles/bobbrown",
      },
      donationQuantity: 490,
    },
    {
      bloodGroup: "O+",
      time: "2024-07-28T16:15:00Z",
      profile: {
        name: "Charlie Davis",
        img: "https://lh3.googleusercontent.com/a/ACg8ocK6mA1zk-rpoZeHMOKxU8EYa_zRh9kShOJkfxGTiLNUT5i7Gw=s96-c",
        url: "https://example.com/profiles/charliedavis",
      },
      donationQuantity: 520,
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-5xl mb-12 text-primary">
        Top Donar <BiSolidDonateBlood className="inline" />
      </h2>
      <div className="flex flex-col gap-2">
        {donars.map((donar, idx) => (
          <div
            key={idx}
            className={`border relative p-3 rounded-md hover:scale-95 ${
              idx % 2 ? "bg-gradient-to-tl" : "bg-gradient-to-bl"
            } from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500`}
          >
            <div className="h-full w-full flex items-center gap-2">
              <div className="avatar">
                <div className="w-16 mask mask-squircle border">
                  <img src={donar.profile.img} />
                </div>
              </div>
              {idx === 0 && (
                <div className="w-12 absolute -top-3 -left-3 -rotate-45">
                  <img src="/crown.png" />
                </div>
              )}
              <div className="grow">
                <h3 className="text-xl font-semibold">{donar.profile.name}</h3>
                <p>
                  <span className="font-semibold">Group:</span>{" "}
                  {donar.bloodGroup} |{" "}
                  <span className="font-semibold">Quantity:</span>
                  {donar.donationQuantity}
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

export default TopDonar;
