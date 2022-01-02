import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Input, Button } from "react-native-elements";
import { COLORS } from "../../../utils/Constants";

const Login = (props: any) => {
  const animation = useRef<LottieView | null>(null);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    animation.current?.play();
  }, []);

  const handleLogin = () => {
    console.log(formState);

    props.navigation.navigate("Feed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          ref={(anim) => {
            animation.current = anim;
          }}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#fff",
          }}
          source={require("../../../assets/animations/gym-animation.json")}
        />
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
        type="clear"
        title="Don't have an account?"
        titleStyle={{ fontSize: 16 }}
        onPress={() => props.navigation.navigate("Signup")}
      />
      <Button title="Get started" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  animationContainer: {
    height: 220,
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    color: COLORS.Secondary.main,
  },
  logo: {
    marginBottom: 30,
  },
});

export default Login;
