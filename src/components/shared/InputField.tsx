import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Input, Text, YStack } from "tamagui";

type InputFieldProps = {
  placeholder: string;
  value: string;
  handleOnChange: Dispatch<SetStateAction<string>>;
  secureTextEntry?: boolean;
  label?: string;
};

export const InputField = ({
  placeholder,
  value,
  handleOnChange,
  secureTextEntry = false,
  label,
}: InputFieldProps) => (
  <YStack>
    {label && (
      <Text color="#333" fontSize={16} pb={8} pl={4}>
        {label}
      </Text>
    )}
    <Input
      size="$4"
      color="#333"
      borderWidth={0}
      autoCapitalize="none"
      placeholder={placeholder}
      value={value}
      fontSize={16}
      backgroundColor="#F3F4F6"
      onChangeText={handleOnChange}
      secureTextEntry={secureTextEntry}
    />
  </YStack>
);
