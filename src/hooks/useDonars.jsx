import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicClient from "./usePublicClient";

const useDonars = () => {
  const { loading } = useAuth();
  const publicClient = usePublicClient();
  const { data, refetch } = useQuery({
    queryKey: ["donars"],
    enabled: !loading,
    queryFn: async () => {
      const res = await publicClient.get(`/donars`);
      return res.data;
    },
  });
  return [data, refetch];
};

export default useDonars;
