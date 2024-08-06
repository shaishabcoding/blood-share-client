import RequestCard from "../../../../components/RequestCard";
import { Link } from "react-router-dom";

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
        <Link to="request" className="link-hover">
          Request ({15})
        </Link>
      </h2>
      <div className="flex flex-col gap-2">
        {requests.map((request, idx) => (
          <RequestCard key={idx} {...{ request, idx }} />
        ))}
      </div>
    </div>
  );
};

export default RecentRequest;
