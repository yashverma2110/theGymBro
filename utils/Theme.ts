import { Theme } from "react-native-elements";
import { COLORS } from "./constants";

const theme: Theme = {
  colors: {
    primary: COLORS.Primary.main,
  },
  Button: {
    raised: true,
    titleStyle: {
      fontSize: 14,
    },
    buttonStyle: {
      borderRadius: 20,
      padding: 12,
    },
    containerStyle: {
      borderRadius: 20,
      height: 42,
    },
    icon: {
      color: COLORS.Primary.contrast,
      size: 16,
      type: "font-awesome",
    },
    iconContainerStyle: {
      marginLeft: 10,
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
  Card: {
    containerStyle: {
      shadowColor: COLORS.Shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 6,
      elevation: 6,
      borderRadius: 12,
    },
  },
};

export default theme;
