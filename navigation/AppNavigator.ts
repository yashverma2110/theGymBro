import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Feed from "../modules/summary/views/Feed";
import Login from "../modules/auth/views/Login";
import Signup from "../modules/auth/views/Signup";

const AppNavigator = createStackNavigator(
  {
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },
    Feed: {
      screen: Feed,
    },
  },
  {
    // initialRouteName: "Feed",
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(AppNavigator);
