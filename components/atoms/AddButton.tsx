import { FontAwesome } from "@expo/vector-icons";
import { Box, Icon, IconButton } from "native-base";

type AddButtonProps = {
  onPress: () => void;
};

export const AddButton = ({ onPress }: AddButtonProps) => {
  return (
    <Box alignItems="center" justifyContent="center">
      <IconButton
        testID="add-button"
        onPress={onPress}
        icon={
          <Icon
            size="md"
            as={FontAwesome}
            name="plus"
            color="black"
            textAlign="center"
            width="100%"
          />
        }
        _pressed={{
          bg: "primary.500",
        }}
      />
    </Box>
  );
};
