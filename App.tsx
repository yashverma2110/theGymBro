import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import store from "./store";
import theme from "./utils/Theme";

export default function App() {
  const [appLoading, setAppLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppNavigator />
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    width: "100%",
  },
});
