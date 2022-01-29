import { FontAwesome } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";

type AddButtonProps = {
  onPress: () => void;
};

export const AddButton = ({ onPress }: AddButtonProps) => {
  return (
    <IconButton
      testID="add-button"
      onPress={onPress}
      icon={<Icon size="md" as={FontAwesome} name="plus" color="black" />}
    />
  );
};
