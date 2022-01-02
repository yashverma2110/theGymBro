import { Theme } from "react-native-elements";
import { COLORS } from "./Constants";

const theme: Theme = {
  colors: {
    primary: COLORS.Primary.main,
  },
  Button: {
    raised: true,
    titleStyle: {
      fontWeight: "bold",
      fontSize: 20,
    },
    buttonStyle: {
      borderRadius: 20,
      padding: 12,
    },
    containerStyle: {
      borderRadius: 20,
    },
  },
  Input: {
    placeholderTextColor: COLORS.Placeholder,
    labelStyle: {
      color: COLORS.Primary.main,
      fontSize: 18,
    },
    style: {
      color: COLORS.Primary.main,
      fontSize: 16,
    },
    leftIcon: {
      color: COLORS.Primary.main,
      size: 16,
    },
  },
};

export default theme;
