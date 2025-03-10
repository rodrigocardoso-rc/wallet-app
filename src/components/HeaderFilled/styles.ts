import { StyleSheet } from 'react-native'
import { COLORS, SHADOW, SPACING } from '../../styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.padding.medium,
    backgroundColor: COLORS.base.greyLight,
    ...SHADOW
  },
  iconContainer: {
    paddingVertical: SPACING.padding.medium,
    paddingHorizontal: SPACING.padding.large,
  },
  icon: {
    height: 22,
    width: 22,
  },
  title: {
    color: COLORS.base.blueDark,
  },
})