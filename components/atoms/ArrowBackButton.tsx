import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Icon, IconButton } from "native-base";

export const ArrowBackButton = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      testID="arrow-back-button"
      onPress={() => {
        navigation.goBack();
      }}
      icon={
        <Icon
          size="sm"
          as={MaterialIcons}
          name="keyboard-arrow-left"
          color="black"
        />
      }
    />
  );
};
