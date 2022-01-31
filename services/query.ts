import { API } from "./api";
import { QueryClient } from "react-query";

const defaultQueryFn = async ({
  queryKey: [url],
}: {
  queryKey: readonly unknown[] | [string];
}) => {
  if (typeof url === "string") {
    const { data, status } = await API.get(`/${url}`);
    if (status === 200) {
      return data;
    } else {
      throw new Error(`Bad response: ${status}`);
    }
  }
  throw new Error("Invalid QueryKey");
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
