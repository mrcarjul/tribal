import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Businesses: undefined;
  Business: { businessId?: string } | undefined;
  Persons: undefined;
  Person: { personId?: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type AddBusinessFormValues = {
  name: string;
};

export type Business = {
  name: string;
  businessId: string;
};
