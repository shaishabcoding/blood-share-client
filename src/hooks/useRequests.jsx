import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicClient from "./usePublicClient";

const useRequests = () => {
  const { loading } = useAuth();
  const publicClient = usePublicClient();
  const { data, refetch } = useQuery({
    queryKey: ["requests"],
    enabled: !loading,
    queryFn: async () => {
      const res = await publicClient.get(`/requests`);
      return res.data;
    },
  });
  return [data, refetch];
};

export default useRequests;
