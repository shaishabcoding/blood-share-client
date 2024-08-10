import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePrivateClient from "./usePrivateClient";

const useMyRequests = () => {
  const { loading } = useAuth();
  const privateClient = usePrivateClient();
  const { data, refetch } = useQuery({
    queryKey: ["requests/my"],
    enabled: !loading,
    queryFn: async () => {
      const res = await privateClient.get(`/requests/my`);
      return res.data;
    },
  });
  return [data, refetch];
};

export default useMyRequests;
