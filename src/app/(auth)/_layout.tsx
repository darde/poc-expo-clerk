import { useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { Storage } from "@/components/utils";
import { Ionicons } from "@expo/vector-icons";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const logout = async () => {
    await Storage.deleteItem("GOT_WELCOME");

    signOut();
  };

  return (
    <Pressable onPress={logout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={"#682D91"} />
    </Pressable>
  );
};

const ProtectedStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="consent"
        options={{
          headerTitle: "Consent",
          headerTintColor: "#682D91",
          headerRight: () => <LogoutButton />,
        }}
      />
    </Stack>
  );
};

export default ProtectedStack;
