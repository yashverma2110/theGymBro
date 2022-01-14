import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "react-native-elements";
import { COLORS } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import * as AUTH_ACTIONS from "../auth-actions";
import FormStateInput from "../../../components/FormStateInput";
import { getToken, setToken } from "../../../utils/methods";

const Login = (props: any) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  const animation = useRef<LottieView | null>(null);
  const [formState, setFormState] = useState<any>({});

  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        props.navigation.navigate("Home");
      }
    });

    animation.current?.play();
  }, []);

  useEffect(() => {
    if (!authState.loading && authState.user) {
      setToken(authState.user.token).then(() => {
        props.navigation.navigate("Home");
      });
      props.navigation.navigate("Home");
    }
  }, [authState.loading, authState.user]);

  const handleLogin = () => {
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
      <FormStateInput
        label="Email address"
        textContentType="emailAddress"
        name="email"
        placeholder="example@gmail.com"
        leftIcon={{
          type: "font-awesome",
          name: "envelope-open",
        }}
        setFormState={setFormState}
      />
      <FormStateInput
        label="Password"
        name="password"
        textContentType="password"
        placeholder="FitAf#1"
        leftIcon={{
          type: "font-awesome",
          name: "key",
        }}
        setFormState={setFormState}
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
