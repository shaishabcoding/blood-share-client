import axios from "../utils/Axios";

const useBloodRequests = () => {
  const demoRequests = [
    {
      email: "shaishab316@gmail.com",
      contactEmail: "shaishab316@gmail.com",
      patientName: "Shaishab Chandra Shil",
      img: "/logo.png",
      bloodGroup: "B+",
      type: "Regular",
      quantity: "34",
      time: "2024-08-03T22:52",
      location: "dsf",
      contactNumber: "asdfd",
      description: "sdafsdfsdf",
    },
    {
      email: "shaishab316@gmail.com",
      contactEmail: "shaishab316@gmail.com",
      patientName: "Shaishab Chandra Shil",
      img: "/logo.png",
      bloodGroup: "B+",
      type: "Regular",
      quantity: "34",
      time: "2024-08-03T23:52",
      location: "dsf",
      contactNumber: "asdfd",
      description: "sdafsdfsdf",
    },
    {
      email: "shaishab316@gmail.com",
      contactEmail: "shaishab316@gmail.com",
      patientName: "Shaishab Chandra Shil",
      img: "/logo.png",
      bloodGroup: "B+",
      type: "Regular",
      quantity: "34",
      time: "2024-08-04T02:52",
      location: "dsf",
      contactNumber: "asdfd",
      description: "sdafsdfsdf",
    },
    {
      email: "shaishab316@gmail.com",
      contactEmail: "shaishab316@gmail.com",
      patientName: "Shaishab Chandra Shil",
      img: "/logo.png",
      bloodGroup: "AB+",
      type: "Emergency",
      quantity: "67",
      time: "2024-08-03T23:01",
      location: "afd",
      contactNumber: "sdsfad",
      description: "sdfsdfsdf",
    },
    {
      email: "shaishab316@gmail.com",
      contactEmail: "shaishab316@gmail.com",
      patientName: "Shaishab Chandra Shil",
      img: "/logo.png",
      bloodGroup: "AB-",
      type: "Regular",
      quantity: "43",
      time: "2024-09-05T10:38",
      location: "fade ",
      contactNumber: "sdaf",
      description: "afsdf",
    },
  ];
  const requests = axios.get("requests");
  return requests ?? demoRequests;
};

export default useBloodRequests;
