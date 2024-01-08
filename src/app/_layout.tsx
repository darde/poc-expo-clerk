import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import config from "../../tamagui.config";
import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Storage, tokenCache } from "@/components/utils";
import TamaguiProvider from "@/components/providers/TamaguiProvider";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();

  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    console.log({ isSignedIn });
    if (!isLoaded) return;

    const checkWelcomeStep = async () => {
      const gotWelcome = await Storage.getItem("GOT_WELCOME");
      if (gotWelcome) {
        router.replace("/login"); // uncoment this after development
        // router.replace("/welcome"); // for development pourpose
      } else {
        await Storage.saveItem("GOT_WELCOME", "true");
        router.replace("/welcome");
      }
    };

    const inTabsGroup = segments[0] === "(auth)";

    if (isSignedIn && !inTabsGroup) {
      router.replace("/home");
    } else if (!isSignedIn) {
      checkWelcomeStep();
    }
  }, [isSignedIn]);

  return <Slot />;
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <TamaguiProvider>
        {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
        <InitialLayout />
      </TamaguiProvider>
      {/* </ThemeProvider> */}
    </ClerkProvider>
  );
}
