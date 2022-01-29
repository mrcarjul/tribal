import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../types";

export const PersonsScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Persons">) => <View />;
