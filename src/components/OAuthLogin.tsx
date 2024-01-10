import { SMButton } from "./shared";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./hooks/warmUpBrowser";
import { useCallback, useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();

type OAuthLoginProps = {
  strategy: "apple" | "google";
};

const OAuthLogin = ({ strategy }: OAuthLoginProps) => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: `oauth_${strategy}` });

  const getButtonProps = () => {
    if (strategy === "apple") {
      return {
        label: "Continue with Apple",
        backgroundColor: "#000",
      };
    }

    return {
      label: "Continue with Google",
      backgroundColor: "#DB4437",
    };
  };

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
      label={getButtonProps().label}
      onPress={handleOnPress}
      backgroundColor={getButtonProps().backgroundColor}
      color="#fff"
      iconname={`logo-${strategy}`}
    />
  );
};

export default OAuthLogin;
