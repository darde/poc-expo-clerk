import { useSignIn } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React, { useState, useCallback, ChangeEvent } from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import { Text, YStack } from "tamagui";
import { InputField, SMButton } from "@/components/shared";
import Spinner from "react-native-loading-spinner-overlay";
import GoogleOAuth from "@/components/GoogleOAuth";
import AppleOAuth from "@/components/AppleOAuth";

const Login = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    setLoading(true);

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />
      <View style={styles.form}>
        <InputField
          placeholder="Type your email"
          handleOnChange={setEmailAddress}
          value={emailAddress}
          label="Email"
        />
        <InputField
          placeholder="Type your password"
          value={password}
          handleOnChange={setPassword}
          secureTextEntry
          label="Password"
        />
      </View>
      <View style={styles.forgot}>
        <Link href="/reset" asChild>
          <Pressable style={styles.button}>
            <Text color="#6D31ED" fontSize={16}>
              Forgot password?
            </Text>
          </Pressable>
        </Link>
      </View>
      <SMButton
        onPress={onSignInPress}
        label="Sign In"
        backgroundColor="#6D31ED"
        color="#fff"
      />
      <View>
        <View style={styles.social}>
          <Text color="#6F7787">OR</Text>
          <GoogleOAuth />
          <AppleOAuth />
        </View>
        <View style={styles.signup}>
          <Text style={{ color: "#6F7787", fontSize: 16, lineHeight: 34 }}>
            Don't have an account?{" "}
          </Text>
          <Link href="/register" asChild>
            <Pressable style={styles.button}>
              <Text style={{ color: "#6D31ED", fontSize: 16 }}>Sign up</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View>
        <Text>Or continue with</Text>
      </View>
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
  form: {
    justifyContent: "flex-start",
    gap: 18,
  },
  forgot: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  social: {
    alignItems: "center",
    paddingTop: 20,
    gap: 20,
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 20,
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});

export default Login;
