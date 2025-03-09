import { StyleSheet } from "react-native";
import { COLORS } from "../../styles1";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
  },
  iconContainer: {
    position: "absolute",
    bottom: 0,
    left: 16,
    paddingVertical: 12,
    paddingRight: 16,
  },
  icon: {
    height: 22,
    width: 22,
  },
  title: {
    color: COLORS.base.blueLight
  },
})