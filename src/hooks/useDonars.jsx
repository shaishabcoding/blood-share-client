import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicClient from "./usePublicClient";

const useDonars = ({ bloodGroup = "", location = "" } = {}) => {
  const { loading } = useAuth();
  const publicClient = usePublicClient();
  const { data, refetch } = useQuery({
    queryKey: ["donars", location, bloodGroup],
    enabled: !loading,
    queryFn: async () => {
      const res = await publicClient.get(
        `/donars?bloodGroup=${bloodGroup}&location=${location}`
      );
      return res.data;
    },
  });
  return [data || {}, refetch];
};

export default useDonars;
