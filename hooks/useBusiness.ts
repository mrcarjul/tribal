import { useQuery } from "react-query";
import { Business } from "../types";

export function useBusiness() {
  return useQuery<Business[]>("/business");
}
