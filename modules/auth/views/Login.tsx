import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import LottieView from "lottie-react-native";
import { Input, Button } from "react-native-elements";
import { COLORS } from "../../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import * as AUTH_ACTIONS from "../auth-actions";

const Login = (props: any) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  const animation = useRef<LottieView | null>(null);
  const [formState, setFormState] = useState<any>({});

  useEffect(() => {
    animation.current?.play();
  }, []);

  useEffect(() => {
    if (!authState.loading && authState.user) {
      props.navigation.navigate("Feed");
    }
  }, [authState.loading, authState.user]);

  const handleInputChange = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log(formState);
    dispatch(AUTH_ACTIONS.login(formState));
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
        onChangeText={(text) => handleInputChange("email", text)}
      />
      <Input
        label="Password"
        placeholder="FitAf#1"
        leftIcon={{
          type: "font-awesome",
          name: "key",
        }}
        onChangeText={(text) => handleInputChange("password", text)}
      />
      <Button
        type="clear"
        title="Don't have an account?"
        titleStyle={{ fontSize: 16 }}
        onPress={() => props.navigation.navigate("Signup")}
      />
      <Button
        title="Get started"
        loading={authState.loading}
        onPress={handleLogin}
      />
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
