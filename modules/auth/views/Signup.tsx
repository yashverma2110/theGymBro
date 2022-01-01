import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { COLORS } from "../../../utils/Constants";
import LottieView from "lottie-react-native";

const Login = (props: any) => {
  const animation = useRef<LottieView | null>(null);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    animation.current?.play();
  }, []);

  const handleLogin = () => {
    console.log(formState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          ref={(anim) => {
            animation.current = anim;
          }}
          loop={false}
          style={{
            width: 180,
            height: 180,
            backgroundColor: "#fff",
          }}
          source={require("../../../assets/animations/gym-animation.json")}
        />
      </View>
      <View style={styles.nameInputContainer}>
        <View style={styles.nameInput}>
          <Input
            label="First Name"
            placeholder="Dwayne"
            leftIcon={{
              type: "font-awesome",
              name: "envelope-open",
            }}
          />
        </View>
        <View style={styles.nameInput}>
          <Input
            style={styles.nameInput}
            label="Last Name"
            placeholder="Jhonson"
            leftIcon={{
              type: "font-awesome",
              name: "envelope-open",
            }}
          />
        </View>
      </View>
      <Input
        label="Email address"
        placeholder="example@gmail.com"
        leftIcon={{
          type: "font-awesome",
          name: "envelope-open",
        }}
      />
      <Input
        label="Password"
        placeholder="FitAf#1"
        leftIcon={{
          type: "font-awesome",
          name: "key",
        }}
      />
      <Button
        title="Already part of the fam?"
        type="clear"
        titleStyle={{ fontSize: 16 }}
        onPress={() => props.navigation.navigate("Login")}
      />
      <Button title="Let's goo" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  animationContainer: {
    height: 220,
    justifyContent: "center",
    marginBottom: 20,
  },
  nameInputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  nameInput: {
    width: "50%",
  },
  input: {
    color: COLORS.Secondary.main,
  },
  logo: {
    marginBottom: 30,
  },
});

export default Login;
