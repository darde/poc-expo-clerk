import * as SecureStore from "expo-secure-store";

export const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (e) {
      console.log(e);
    }
  },
  async saveToken(key: string, value: string) {
    console.log("key: ", key);
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (e) {
      console.log(e);
    }
  },
};
