import { Text } from "native-base";

type TitleProps = {
  text: string 
}

export const Title = ({ text }: TitleProps) => (
  <Text testID="title-component" fontSize="2xl">{text}</Text>
);
