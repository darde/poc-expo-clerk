import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SMButton, SMLink } from "@/components/shared";
import { router } from "expo-router";

const TermsAndPrivacyPolicy = () => {
  const handleOnPress = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="verified-user" size={48} color={"#682D91"} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          By pressing continue button I confirm 16+ years old and agree{" "}
          <Text style={styles.strong}>Privacy Policy</Text> and{" "}
          <Text style={styles.strong}>Terms & Conditions</Text>. Also, I agree
          processing of my personal health data.
        </Text>
      </View>
      <SMButton onPress={handleOnPress} label="Agree" />
      <SMLink onPress={() => {}} label="Decline" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    position: "absolute",
    bottom: 0,
    padding: 24,
    paddingTop: 50,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "white",
  },
  textContainer: {
    marginTop: 12,
  },
  text: {
    color: "#682D91",
    fontSize: 18,
    lineHeight: 28,
  },
  strong: {
    fontWeight: "bold",
  },
});

export default TermsAndPrivacyPolicy;
