import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../types";

export const PersonScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Person">) => <View />;
