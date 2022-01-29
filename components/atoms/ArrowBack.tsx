import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Icon, IconButton } from "native-base";

export const ArrowBack = () => {
  const navigation = useNavigation();
  return (
    <IconButton
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
