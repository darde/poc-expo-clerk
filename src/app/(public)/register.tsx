import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";
import { InputField, SMButton, SMLink } from "@/components/shared";

const register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");
  const [error, setError] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const checkPasswordMatch = () => {
    if (emailAddress === "") {
      setError("Please, provide a valid email");
      return;
    }
    if (password === "") {
      setError("Please, provide a valid password");
      return;
    }
    if (password !== passwordVerification) {
      setError("The passwords don't match");
      return;
    }
    setError("");
    onSignUpPress();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />

      {!pendingVerification && (
        <View style={styles.form}>
          <View style={styles.fields}>
            <InputField
              placeholder="Type your best email"
              handleOnChange={setEmailAddress}
              value={emailAddress}
              label="Email"
            />
            <InputField
              placeholder="Type a password"
              handleOnChange={setPassword}
              value={password}
              label="Password"
              secureTextEntry
            />
            <InputField
              placeholder="Repeat the password"
              handleOnChange={setPasswordVerification}
              value={passwordVerification}
              label="Confirm the password"
              secureTextEntry
            />
          </View>
          <View style={styles.bottom}>
            {error && <Text style={styles.error}>{error}</Text>}
            <SMButton
              // onPress={onSignUpPress}
              onPress={checkPasswordMatch}
              label="Sign up"
              backgroundColor="#6D31ED"
              color="#fff"
            />
          </View>
        </View>
      )}

      {pendingVerification && (
        <View>
          <InputField
            placeholder="Type your code"
            handleOnChange={setCode}
            value={code}
            label="Verification code"
          />
          <SMLink label="Verify email" onPress={onPressVerify} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  fields: {
    justifyContent: "flex-start",
    gap: 18,
  },
  form: {
    justifyContent: "flex-start",
    gap: 32,
  },
  error: {
    color: "#DB4437",
    fontSize: 16,
  },
  bottom: {
    alignItems: "center",
    gap: 15,
  },
});

export default register;
