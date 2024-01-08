import { StyleSheet } from "react-native";
import { Button } from "tamagui";
import React from "react";
import Colors from "@/constants/Colors";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

const PrimaryButton = ({ label, onPress }: PrimaryButtonProps) => {
  return (
    <Button onPress={onPress} style={styles.primaryBtn}>
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: Colors.light.primaryBackgroundColor,
    color: Colors.light.text,
  },
});

export default PrimaryButton;
