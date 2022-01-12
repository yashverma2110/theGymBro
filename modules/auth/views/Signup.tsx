import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";
import { COLORS } from "../../../utils/constants";
import FormStateInput from "../../../components/FormStateInput";
import * as AUTH_ACTIONS from "../auth-actions";
import { getToken, setToken } from "../../../utils/methods";

const Login = (props: any) => {
  const dispatch = useDispatch();
  const animation = useRef<LottieView | null>(null);
  const authState = useSelector((state: any) => state.auth);
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
    }
  }, [authState.loading, authState.user]);

  const handleSignup = () => {
    dispatch(AUTH_ACTIONS.signUp(formState));
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
          <FormStateInput
            label="First Name"
            name="firstName"
            placeholder="Dwayne"
            leftIcon={{
              type: "font-awesome",
              name: "envelope-open",
            }}
            setFormState={setFormState}
          />
        </View>
        <View style={styles.nameInput}>
          <FormStateInput
            style={styles.nameInput}
            name="lastName"
            label="Last Name"
            placeholder="Jhonson"
            leftIcon={{
              type: "font-awesome",
              name: "envelope-open",
            }}
            setFormState={setFormState}
          />
        </View>
      </View>
      <FormStateInput
        label="Email address"
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
        placeholder="FitAf#1"
        leftIcon={{
          type: "font-awesome",
          name: "key",
        }}
        setFormState={setFormState}
      />
      <Button
        title="Already part of the fam?"
        type="clear"
        titleStyle={{ fontSize: 16 }}
        onPress={() => props.navigation.navigate("Login")}
      />
      <Button title="Let's goo" onPress={handleSignup} />
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
