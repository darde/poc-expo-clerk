import { useEffect, useState } from "react";
import { Button, Text, XStack, styled } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const StyledButton = styled(Button, {
  width: "100%",
  height: 48,
  fontSize: 20,
  borderRadius: 6,
});

type SMButtonProps = {
  label: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  iconname?: keyof typeof Ionicons.glyphMap;
};

export const SMButton = ({
  onPress,
  label,
  backgroundColor = "#682D91",
  color = "#fff",
  fontSize = 18,
  iconname,
}: SMButtonProps) => {
  return (
    <StyledButton onPress={onPress} backgroundColor={backgroundColor}>
      {iconname ? (
        <XStack fd="row" ai="center" jc="center" gap={10} w="100%">
          <Ionicons name={iconname} color="#fff" size={24} />
          <Text color={color} fontSize={fontSize}>
            {label}
          </Text>
        </XStack>
      ) : (
        <Text color={color} fontSize={fontSize}>
          {label}
        </Text>
      )}
    </StyledButton>
  );
};
