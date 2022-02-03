import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Button, Card, Text } from "react-native-elements";
import { COLORS } from "../../../utils/constants";
import AddFriendModal from "../../../components/AddFriendModal";

const Feed = () => {
  const [isAddFriendModalShowing, setIsAddFriendModalShowing] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.animationContainer, ...styles.topBubbles }}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#fff",
          }}
          source={require("../../../assets/animations/bubble-levitate.json")}
        />
      </View>
      <Card>
        <Card.Title h4>WALL OF GLORY</Card.Title>
        <Card.Divider />
        <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "700" }}>
          You and your gym buddy's activities will appear here. Show your
          appreciation, track activities, maintain streaks, compete and stay
          accountable.
        </Text>
        <View style={{ alignItems: "center" }}>
          <Button
            title="Add or Invite a friend"
            containerStyle={styles.inviteButton}
            onPress={() => setIsAddFriendModalShowing(true)}
          />
        </View>
      </Card>
      <View style={{ ...styles.animationContainer, ...styles.bottomBubbles }}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#fff",
          }}
          source={require("../../../assets/animations/bubble-levitate.json")}
        />
      </View>
      <AddFriendModal
        isModalShowing={isAddFriendModalShowing}
        setIsModalShowing={setIsAddFriendModalShowing}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  animationContainer: {
    height: 120,
    justifyContent: "center",
    marginBottom: 20,
    position: "absolute",
  },
  bottomBubbles: {
    bottom: 0,
    right: 0,
  },
  topBubbles: {
    top: 0,
    left: 0,
    transform: [{ rotateX: "10deg" }],
  },
  inviteButton: {
    width: "60%",
    marginTop: 16,
  },
});
