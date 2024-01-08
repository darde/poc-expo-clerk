import { Button, Text, StyleSheet } from "react-native";
import React from "react";

type LinkProps = {
  label: string;
  onPress: () => void;
};

const Link = ({ label, onPress }: LinkProps) => {
  return <Button onPress={onPress} title={label} />;
};

export default Link;
