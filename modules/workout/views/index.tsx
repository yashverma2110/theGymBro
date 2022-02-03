import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import LottieView from "lottie-react-native";
import { COLORS } from "../../../utils/constants";
import { Chip } from "react-native-elements/dist/buttons/Chip";

const Workout = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title h4>This is the first step!</Card.Title>
        <Card.Divider />
        <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "bold" }}>
          Now let's get started:
        </Text>
        <View style={{ alignItems: "center" }}>
          <Button title="Start a workout" containerStyle={styles.buttons} />
          <Button
            title="Create a workout"
            containerStyle={styles.buttons}
            buttonStyle={{ backgroundColor: COLORS.Success }}
            icon={{
              name: "plus",
            }}
          />
        </View>
      </Card>
      <Card>
        <Card.Title h4>Recent</Card.Title>
        <Card.Divider />
        <Card>
          <Text>Nothing yet...</Text>
        </Card>
      </Card>
      <View style={styles.container}>
        <View style={styles.stampContainer}>
          {["It", "Takes", "Work"].map((text, index) => {
            return (
              <Text style={{ fontSize: 14 * (index + 1), fontWeight: "bold" }}>
                {text}
              </Text>
            );
          })}
        </View>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              backgroundColor: "#fff",
            }}
            source={require("../../../assets/animations/workout-animation.json")}
          />
        </View>
      </View>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  animationContainer: {
    height: 140,
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 0,
  },
  buttons: {
    width: "60%",
    marginTop: 16,
  },
  stampContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
  },
});
