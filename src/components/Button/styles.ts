import { StyleSheet } from 'react-native'
import COLORS from '../../styles/Colors'
import SPACING from '../../styles/Spacing'

export default StyleSheet.create({
  animatedViewContainer: {
    width: '100%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.padding.large,
    paddingHorizontal: SPACING.padding.large,
    borderRadius: SPACING.borderRadius.medium,
  },
  default: {
    backgroundColor: COLORS.base.blueLight,
    color: COLORS.base.white
  },
  disable: {
    backgroundColor: COLORS.base.greyLight,
    color: COLORS.text.grey
  },
  secondary: {
    backgroundColor: COLORS.base.greenLight,
    color: COLORS.base.blueDark
  },
})