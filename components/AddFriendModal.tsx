import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { COLORS, STANDARD_BUTTON_HEIGHT } from "../utils/constants";

interface AddFriendModalProps {
  isModalShowing: boolean;
  setIsModalShowing: React.Dispatch<boolean>;
}

const AddFriendModal = ({
  isModalShowing,
  setIsModalShowing,
}: AddFriendModalProps) => {
  const closeModal = () => {
    setIsModalShowing(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isModalShowing}
      onRequestClose={closeModal}
    >
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Card.Title h4>MANAGE YOUR FRIENDS</Card.Title>
          <Card.Divider />
          <Input
            placeholder="Enter email or name"
            leftIcon={{
              name: "users",
            }}
          />
          <Button title="Add" containerStyle={styles.buttons} />
          <Card.Divider />
          <Button
            title="Send Request"
            containerStyle={styles.buttons}
            icon={{
              name: "send",
            }}
            iconRight
          />
          <Button
            title="Cancel"
            containerStyle={styles.buttons}
            buttonStyle={{ backgroundColor: COLORS.Black }}
            onPress={closeModal}
          />
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  card: {
    borderRadius: 8,
  },
  buttons: {
    marginBottom: 16,
  },
});

export default AddFriendModal;
