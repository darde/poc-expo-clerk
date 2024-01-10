import { SMButton } from "./shared";
import * as AppleAuthentication from "expo-apple-authentication";
import * as WebBrowser from "expo-web-browser";
import { View, StyleSheet } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./hooks/warmUpBrowser";
import { useCallback, useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();

const AppleOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_apple" });

  const handleOnPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      console.log({ createdSessionId });
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
      label="Continue with Apple"
      onPress={handleOnPress}
      backgroundColor="#000000"
      color="#fff"
    />
  );
};

// const AppleOAuth = () => {
//   const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);
//   const { startOAuthFlow } = useOAuth({ strategy: "oauth_apple" });

//   useEffect(() => {
//     const checkAvailable = async () => {
//       const isAvailable = await AppleAuthentication.isAvailableAsync();
//       setAppleAuthAvailable(isAvailable);
//     };
//     checkAvailable();
//   }, []);

//   const startClerkAuthFlow = async () => {
//     try {
//       console.log("calling start oauth...");

//       const { createdSessionId, setActive } = await startOAuthFlow();

//       console.log({ createdSessionId });
//       if (createdSessionId) {
//         setActive!({ session: createdSessionId });
//       }
//     } catch (e: any) {
//       console.log("clerk error: ", e);
//     }
//   };

//   const login = async () => {
//     try {
//       const credential = await AppleAuthentication.signInAsync({
//         requestedScopes: [
//           AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
//           AppleAuthentication.AppleAuthenticationScope.EMAIL,
//         ],
//       });

//       console.log({ credential });

//       startClerkAuthFlow();
//     } catch (e: any) {
//       console.log("apple error: ", e);
//     }
//   };

//   const getAppleAuthContent = () => {
//     return (
//       <AppleAuthentication.AppleAuthenticationButton
//         buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
//         buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
//         cornerRadius={5}
//         style={styles.button}
//         onPress={login}
//       />
//     );
//   };

//   return (
//     <>
//       {appleAuthAvailable && (
//         <View style={styles.container}>{getAppleAuthContent()}</View>
//       )}
//     </>
//   );
// };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 48,
  },
});

export default AppleOAuth;
