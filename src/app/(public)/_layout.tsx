import BackButton from "@/components/shared/BackButton";
import { Stack, useRouter } from "expo-router";

const PublicLayout = () => {
  const { back } = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#682D91",
        },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="login"
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: true,
          headerTintColor: "#682D91",
          headerTitle: "Register",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen name="reset" options={{ headerTitle: "Reset Password" }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen
        name="terms-and-privacy-policy"
        options={{
          presentation: "modal",
          contentStyle: { backgroundColor: "transparent" },
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default PublicLayout;
