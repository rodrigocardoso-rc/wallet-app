import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../styles";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
  },
  iconContainer: {
    position: "absolute",
    bottom: 0,
    left: SPACING.margin.medium,
    paddingVertical: SPACING.padding.medium,
    paddingRight: SPACING.padding.large,
  },
  icon: {
    height: 22,
    width: 22,
  },
  title: {
    color: COLORS.base.blueLight
  },
})