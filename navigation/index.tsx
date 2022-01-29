import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  BusinessScreen,
  BusinessesScreen,
  PersonScreen,
  PersonsScreen,
} from "../components";
import { RootStackParamList } from "../types";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Businesses" component={BusinessesScreen} />
      <Stack.Screen name="Business" component={BusinessScreen} />
      <Stack.Screen name="Persons" component={PersonsScreen} />
      <Stack.Screen name="Person" component={PersonScreen} />
    </Stack.Navigator>
  );
}
