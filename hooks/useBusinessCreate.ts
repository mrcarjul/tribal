import { Alert } from "react-native";
import { useMutation } from "react-query";
import { API, businessEndpoints, queryClient } from "../services";
import { Businesses } from "../types";

/**
 * @description Manages post of a business with useMutation
 * @param {cb} onSuccessEnd to be executed at the end of onSuccess
 * @param {cb} onError
 * @returns
 */
export const useBusinessCreate = ({
  onSuccessEnd,
  onError,
}: {
  onSuccessEnd: () => void;
  onError: () => void;
}) => {
  return useMutation(
    (name: string) => businessEndpoints(API).addBusiness(name),
    {
      onSuccess: (response, name) => {
        if (response.status === 200) {
          const businessId = response.headers["x-amzn-requestid"];
          if (typeof businessId === "string") {
            queryClient.setQueryData(["business"], (currentBusinessesData) => {
              const { businesses } =
                (currentBusinessesData as Businesses) || {}; // could be undefined
              const newBusiness = {
                businessId,
                name,
              };
              if (businesses?.length) {
                return {
                  businesses: [...businesses, newBusiness],
                };
              }
              return {
                businesses: [newBusiness],
              };
            });
            Alert.alert("Business added");
            onSuccessEnd();
            return;
          }
          onError();
        }
      },
      onError,
      onSettled: () => {
        queryClient.invalidateQueries("business");
      },
    }
  );
};
