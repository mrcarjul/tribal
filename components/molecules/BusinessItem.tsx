import React, { memo, useCallback } from "react";
import { Box, HStack, Text, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { IconBusiness } from "../atoms/IconBusiness";
import { Business } from "../../types";

export const BusinessItem = ({ name, businessId }: Business) => {
  const navigation = useNavigation();
  const onPressBusinessItem = useCallback(() => {
    navigation.navigate("Business", { businessId, name });
  }, [navigation]);

  return (
    <Pressable onPress={onPressBusinessItem}>
      {({ isPressed }) => {
        return (
          <Box
            style={{
              transform: [
                {
                  scale: isPressed ? 0.95 : 1,
                },
              ],
            }}
            borderBottomWidth={1}
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack
              space={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <IconBusiness />
              <Text
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                bold
              >
                {name}
              </Text>
            </HStack>
          </Box>
        );
      }}
    </Pressable>
  );
};

export const MemoBusinessItem = memo(BusinessItem);
