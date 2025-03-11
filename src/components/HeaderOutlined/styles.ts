import { StyleSheet } from "react-native";
import COLORS from "../../styles/Colors";
import SPACING from "../../styles/Spacing";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
  },
  iconContainer: {
    position: "absolute",
    bottom: SPACING.margin.medium,
    left: SPACING.margin.medium,
    paddingVertical: SPACING.padding.medium,
    paddingRight: SPACING.padding.large,
  },
  icon: {
    height: 22,
    width: 22,
  },
  titleContainer: {
    paddingVertical: SPACING.padding.medium,
  },
  title: {
    color: COLORS.base.blueLight
  },
})