import { getItemAsync, setItemAsync } from "expo-secure-store";

export const setToken = async (token: string) => {
  await setItemAsync("userKey", token);
};

export const getToken = async () => {
  const token = await getItemAsync("userKey");

  return token;
};
