declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Businesses: undefined;
  Business: { businessId?: string };
  Persons: undefined;
  Person: { personId?: string };
};
