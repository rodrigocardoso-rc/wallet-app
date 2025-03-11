import { StyleSheet } from 'react-native'
import COLORS from '../../styles/Colors'
import SPACING from '../../styles/Spacing'

export default StyleSheet.create({
  animatedContainer: {
    width: '100%',
    borderRadius: SPACING.borderRadius.large,
    paddingHorizontal: SPACING.padding.large,
  },
  green: {
    backgroundColor: COLORS.base.greenLight,
    color: COLORS.text.greyDark
  },
  black: {
    backgroundColor: COLORS.text.black,
    color: COLORS.base.white
  },
  container: {
    width: '100%',
    gap: 40,
    paddingVertical: 40,
  },
  containerText: {
    gap: SPACING.gap.small,
  },
  unfocused: {
    opacity: 0.4
  }
})