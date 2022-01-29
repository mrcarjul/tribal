import { Text } from "native-base";

export const Title = ({ text }: { text: string }) => (
  <Text testID="title-component" fontSize="lg">{text}</Text>
);
