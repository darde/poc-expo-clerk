import { Button } from "react-native";
import React from "react";

type SecondaryButtonProps = {
  label: string;
  onPress: () => void;
};

const SecondaryButton = ({ label, onPress }: SecondaryButtonProps) => {
  return <Button onPress={onPress} title={label} />;
};

export default SecondaryButton;
