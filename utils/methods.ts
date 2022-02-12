import { getItemAsync, setItemAsync } from "expo-secure-store";

export const setToken = async (token: string) => {
  await setItemAsync("userKey", token);
};

export const getToken = async () => {
  const token = await getItemAsync("userKey");

  return token;
};

export const getOptionsFromEnum = (
  enumObject: any
): { label: string; value: string }[] => {
  const list = [];
  for (const key in enumObject) {
    list.push({
      label: key,
      value: enumObject[key],
    });
  }

  return list;
};