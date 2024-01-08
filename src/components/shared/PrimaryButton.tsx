import { Button, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

const PrimaryButton = ({ label, onPress }: PrimaryButtonProps) => {
  return <Button onPress={onPress} title={label} />;
};

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: Colors.light.primaryBackgroundColor,
    color: Colors.light.text,
  },
});

export default PrimaryButton;
