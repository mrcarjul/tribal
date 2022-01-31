import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Box, FlatList, Spinner } from "native-base";
import { useQuery } from "react-query";
import { Business, RootStackParamList } from "../../types";
import { MemoBusinessItem, Header } from "../molecules";
import { AddButton } from "..";

type Businesses = {
  businesses: Business[];
};

export const BusinessesScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Businesses">) => {
  const { data, isFetching } = useQuery<Businesses>("business");

  const onAddBusiness = useCallback(() => {
    navigation.navigate("Business");
  }, [navigation]);

  return (
    <Box flex={1}>
      <Header title="Businesses" />
      <FlatList
        data={data?.businesses}
        renderItem={({ item }) => <MemoBusinessItem {...item} />}
        keyExtractor={(item) => item.businessId}
        ListEmptyComponent={isFetching ? <Spinner /> : null}
      />
      <AddButton onPress={onAddBusiness} />
    </Box>
  );
};
