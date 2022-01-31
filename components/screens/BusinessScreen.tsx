import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Box } from "native-base";
import { AddBusinessFormContainer, Header } from "../molecules";
import { RootStackParamList } from "../../types";

export const BusinessScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "Business">) => {
  const businessId = route.params?.businessId;

  return (
    <Box flex={1}>
      <Header allowBack title="Add Business" />
      <AddBusinessFormContainer businessId={businessId} />
    </Box>
  );
};
