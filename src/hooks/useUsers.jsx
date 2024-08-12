import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePrivateClient from "./usePrivateClient";

const useDonars = () => {
  const { loading } = useAuth();
  const privateClient = usePrivateClient();
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await privateClient.get(`/users`);
      return res.data;
    },
  });
  return [data || {}, refetch];
};

export default useDonars;
