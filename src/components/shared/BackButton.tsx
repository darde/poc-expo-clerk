import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";

type BackButtonProps = {
  color?: string;
};

const BackButton = ({ color = "#682D91" }: BackButtonProps) => {
  return <Ionicons name="arrow-back" size={23} color={color} />;
};

export default BackButton;
