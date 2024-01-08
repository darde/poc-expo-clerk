import { styled, Button, Text } from "tamagui";
import React from "react";

const StyledLink = styled(Button, {
  backgroundColor: "transparent",
  width: "100%",
  height: 48,
  fontSize: 20,
});

const StyledText = styled(Text, {
  fontWeight: "bold",
  fontSize: 18,
  textDecorationLine: "underline",
});

type LinkProps = {
  label: string;
  onPress: () => void;
  color?: string;
};

export const SMLink = ({ label, onPress, color = "#682D91" }: LinkProps) => {
  return (
    <StyledLink onPress={onPress}>
      <StyledText color={color}>{label}</StyledText>
    </StyledLink>
  );
};
