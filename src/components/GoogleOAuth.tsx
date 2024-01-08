import React, { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native";
import { SMButton } from "./shared";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const GoogleOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleOnPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <SMButton
      label="Continue with Google"
      onPress={handleOnPress}
      backgroundColor="#DB4437"
      color="#fff"
    />
  );
  // return <Button title="Sign in with Google!!" onPress={onPress} />;
};
export default GoogleOAuth;
