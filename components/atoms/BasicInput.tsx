import { FormControl, Input, IInputProps } from "native-base";
import { TextInput } from "react-native";

interface BasicInputProps extends IInputProps {
  error?: string;
  inputRef?: React.Ref<TextInput>;
}

export const BasicInput = ({
  error,
  inputRef,
  placeholder,
  ...props
}: BasicInputProps) => {
  return (
    <FormControl isInvalid={typeof error === "string"}>
      <FormControl.Label _text={{ color: "primary.800" }}>
        {placeholder}
      </FormControl.Label>
      <Input
        borderColor="primary.500"
        _focus={{
          borderColor: "primary.900",
        }}
        {...props}
      />
      <FormControl.ErrorMessage
        _text={{ fontSize: "xs", color: "error.500", fontWeight: 500 }}
      >
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
