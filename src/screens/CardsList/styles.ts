import { StyleSheet } from 'react-native'
import { COLORS, SPACING } from '../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.blueDark
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.padding.xLarge,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: COLORS.base.greyLight
  },
  title: {
    color: COLORS.base.blueLight
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.padding.large,
    gap: SPACING.gap.large,
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: SPACING.margin.large
  },
  bodyText: {
    color: COLORS.base.white
  },
})