import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Check } from "@tamagui/lucide-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Checkbox, Label } from "tamagui";
import { SMButton, SMLink } from "@/components/shared";

const consent = () => {
  const [ageChecked, setAgeChecked] = useState(false);
  const [dataChecked, setDataChecked] = useState(false);

  const handleOnAgeCheck = () => {
    setAgeChecked(!ageChecked);
  };

  const handleOnDataCheck = () => {
    setDataChecked(!dataChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.supportText}>
          To be compliant with Data protection we have to ask you consent for
          the following:
        </Text>
        <View style={styles.fields}>
          <View style={styles.form}>
            <Checkbox
              id="terms"
              size="$6"
              backgroundColor="transparent"
              borderColor="transparent"
              checked={false}
              onCheckedChange={handleOnAgeCheck}
            >
              <MaterialIcons
                name={`${ageChecked ? "check-box" : "check-box-outline-blank"}`}
                size={28}
                color="#682D91"
              />
            </Checkbox>
            <Label size={32} htmlFor={"terms"} color="#682D91" lineHeight={0}>
              I'm confirm 16+ years old and Agree with the <Text>Privacy</Text>{" "}
              and <Text>Terms</Text>.
            </Label>
          </View>

          <View style={styles.form}>
            <Checkbox
              id="data"
              size="$6"
              backgroundColor="transparent"
              borderColor="transparent"
              checked={false}
              onCheckedChange={handleOnDataCheck}
            >
              <MaterialIcons
                name={`${
                  dataChecked ? "check-box" : "check-box-outline-blank"
                }`}
                size={28}
                color="#682D91"
              />
            </Checkbox>
            <Label size={32} htmlFor={"data"} color="#682D91" lineHeight={0}>
              I agree processing of my personal heald data.
            </Label>
          </View>
        </View>
      </View>
      <SMButton label="Next" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 120,
    paddingBottom: 60,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  top: {
    width: "100%",
    alignContent: "center",
    textAlign: "center",
    gap: 24,
  },
  form: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingRight: 10,
    gap: 10,
  },
  fields: {
    paddingTop: 50,
    gap: 30,
  },
  header: {
    color: "#682D91",
    fontSize: 24,
    textAlign: "center",
  },
  supportText: {
    color: "#682D91",
    fontSize: 18,
  },
});

export default consent;
