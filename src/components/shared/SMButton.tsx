import { useEffect, useState } from "react";
import { Button, Text, styled } from "tamagui";

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
};

export const SMButton = ({
  onPress,
  label,
  backgroundColor = "#682D91",
  color = "#fff",
  fontSize = 18,
}: SMButtonProps) => {
  return (
    <StyledButton onPress={onPress} backgroundColor={backgroundColor}>
      <Text color={color} fontSize={fontSize}>
        {label}
      </Text>
    </StyledButton>
  );
};
