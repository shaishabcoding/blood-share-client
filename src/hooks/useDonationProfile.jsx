import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePrivateClient from "./usePrivateClient";

const useDonationProfile = () => {
  const { loading } = useAuth();
  const privateClient = usePrivateClient();
  const { data, refetch } = useQuery({
    queryKey: ["donationProfile"],
    enabled: !loading,
    queryFn: async () => {
      const res = await privateClient.get(`/donation-profile`);
      console.log(res.data);
      return res.data;
    },
  });
  return [data, refetch];
};

export default useDonationProfile;
