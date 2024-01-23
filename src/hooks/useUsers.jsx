import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    error,
    data: users,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    qeuryFn: async () => {
      const response = await axiosPublic.get("/dashboard/users");
      return response.data;
    },
  });
  if (isPending) return "loading...";
  if (error) return "An error has occurred: " + error.message;
  return [users, isPending, refetch];
};
export default useUsers