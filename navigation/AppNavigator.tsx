import React from "react";
import FA from "react-native-vector-icons/FontAwesome5";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Login from "../modules/auth/views/Login";
import Signup from "../modules/auth/views/Signup";
import Feed from "../modules/feed/views";
import { COLORS } from "../utils/constants";
import { Text, View } from "react-native";
import Workout from "../modules/workout/views";

const HomeNavigator = createBottomTabNavigator(
  {
    Workout: {
      screen: Workout,
      navigationOptions: {
        tabBarLabel: (
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: COLORS.Primary.main }}>Workout</Text>
          </View>
        ),
        tabBarIcon: ({ focused }) => (
          <FA
            name="dumbbell"
            size={18}
            color={COLORS.Primary.main}
            solid={focused}
          />
        ),
      },
    },
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: (
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: COLORS.Primary.main }}>Feed</Text>
          </View>
        ),
        tabBarIcon: ({ focused }) => (
          <FA
            name="comments"
            size={18}
            color={COLORS.Primary.main}
            solid={focused}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Feed",
  }
);

const AuthNavigator = createStackNavigator(
  {
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },
    Home: {
      screen: HomeNavigator,
    },
  },
  {
    initialRouteName: "Signup",
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
    },
  }
);

export default {
  AuthNavigator: createAppContainer(AuthNavigator),
  HomeNavigator: createAppContainer(HomeNavigator),
};
