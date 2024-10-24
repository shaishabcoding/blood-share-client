import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePrivateClient from "./usePrivateClient";

const useDonationProfile = () => {
  const { user, loading } = useAuth();
  const privateClient = usePrivateClient();
  const { data, refetch } = useQuery({
    queryKey: ["donationProfile", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await privateClient.get(`/donation-profile`);
      return res.data;
    },
  });
  return [data, refetch];
};

export default useDonationProfile;
