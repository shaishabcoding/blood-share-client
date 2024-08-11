import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicClient from "./usePublicClient";

const useRequests = ({ bloodGroup = "", location = "" } = {}) => {
  const { loading } = useAuth();
  const publicClient = usePublicClient();
  const { data, refetch } = useQuery({
    queryKey: ["requests", location, bloodGroup],
    enabled: !loading,
    queryFn: async () => {
      const res = await publicClient.get(
        `/requests?bloodGroup=${bloodGroup}&location=${location}`
      );
      return res.data;
    },
  });
  return [data || {}, refetch];
};

export default useRequests;
