import { BiSolidDonateBlood } from "react-icons/bi";
import DonarCard from "../../../../components/DonarCard";
const TopDonar = () => {
  const donars = [
    {
      bloodGroup: "A+",
      time: "2024-05-28T10:00:00Z",
      profile: {
        name: "John Doe",
        img: "logo.png",
        url: "https://example.com/profiles/johndoe",
      },
      quantity: 500,
      isActive: true,
    },
    {
      bloodGroup: "O-",
      time: "2024-07-25T11:30:00Z",
      profile: {
        name: "Jane Smith",
        img: "logo.png",
        url: "https://example.com/profiles/janesmith",
      },
      quantity: 450,
    },
    {
      bloodGroup: "B+",
      time: "2024-07-28T13:00:00Z",
      profile: {
        name: "Alice Johnson",
        img: "logo.png",
        url: "https://example.com/profiles/alicejohnson",
      },
      quantity: 470,
    },
    {
      bloodGroup: "AB-",
      time: "2024-07-28T14:45:00Z",
      profile: {
        name: "Bob Brown",
        img: "logo.png",
        url: "https://example.com/profiles/bobbrown",
      },
      quantity: 490,
    },
    {
      bloodGroup: "O+",
      time: "2024-07-28T16:15:00Z",
      profile: {
        name: "Charlie Davis",
        img: "logo.png",
        url: "https://example.com/profiles/charliedavis",
      },
      quantity: 520,
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-4xl mb-6 md:mb-10 text-primary">
        Top Donar <BiSolidDonateBlood className="inline" />
      </h2>
      <div className="flex flex-col gap-2">
        {donars.map((donar, idx) => (
          <DonarCard {...{ donar, idx }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default TopDonar;
