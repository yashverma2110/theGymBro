import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Feed = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Seems lonely in here</Text>
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
