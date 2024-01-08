import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ShemattersLogo } from "@/assets/ShemattersLogo";
import { router } from "expo-router";

const Welcome = () => {
  const { push } = router;

  useEffect(() => {
    setTimeout(() => {
      push("/terms-and-privacy-policy");
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <ShemattersLogo width="50%" height="50%" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  logo: {
    position: "absolute",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingTop: "35%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Welcome;
