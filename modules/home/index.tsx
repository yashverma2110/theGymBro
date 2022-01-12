import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppNavigator from "../../navigation/AppNavigator";

const Home = () => {
  return (
    <View style={styles.container}>
      <AppNavigator.HomeNavigator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
