import { MaterialIcons } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";

type EditButtonProps = {
  onPress: () => void;
};

export const EditButton = ({ onPress }: EditButtonProps) => {
  return (
    <IconButton
      testID="edit-button"
      onPress={onPress}
      icon={
        <Icon size="sm" as={MaterialIcons} name="mode-edit" color="black" />
      }
    />
  );
};
