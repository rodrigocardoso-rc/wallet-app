import { StyleSheet } from 'react-native'
import COLORS from '../../styles/Colors'
import SPACING from '../../styles/Spacing'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.padding.large,
    gap: SPACING.gap.xLarge,
  },
  textContainer: {
    alignItems: 'center',
    gap: SPACING.gap.large,
  },
  text: {
    color: COLORS.base.white
  }
})