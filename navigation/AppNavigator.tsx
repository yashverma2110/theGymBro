import React from "react";
import FA from "react-native-vector-icons/FontAwesome5";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../modules/home";
import Login from "../modules/auth/views/Login";
import Signup from "../modules/auth/views/Signup";
import Feed from "../modules/home/views/Feed";
import { COLORS } from "../utils/constants";
import { Text, View } from "react-native";

const AuthNavigator = createStackNavigator(
  {
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
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

const HomeNavigator = createBottomTabNavigator(
  {
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

export default {
  AuthNavigator: createAppContainer(AuthNavigator),
  HomeNavigator: createAppContainer(HomeNavigator),
};
