import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../modules/auth/views/Login";
import Signup from "../modules/auth/views/Signup";

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);
