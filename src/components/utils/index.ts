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
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (e) {
      console.log(e);
    }
  },
};

export const Storage = {
  async getItem(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (e) {
      console.log(e);
    }
  },
  async saveItem(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (e) {
      console.log(e);
    }
  },
  async deleteItem(key: string) {
    try {
      return SecureStore.deleteItemAsync(key);
    } catch (e) {
      console.log(e);
    }
  },
};
