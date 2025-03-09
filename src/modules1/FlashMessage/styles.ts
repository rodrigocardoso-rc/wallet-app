import { StyleSheet } from "react-native";
import { COLORS } from "../../styles1";

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  success: {
    backgroundColor: COLORS.alert.green,
  },
  info: {
    backgroundColor: COLORS.alert.yellow,
  },
  danger: {
    backgroundColor: COLORS.alert.red,
  }
})