import { StyleSheet } from 'react-native'
import COLORS from '../../styles/Colors'
import SPACING from '../../styles/Spacing'

export default StyleSheet.create({
  large: {
    width: '100%'
  },
  medium: {
    width: '45%'
  },
  container: {
    gap: SPACING.gap.small,
    alignItems: 'flex-start',
  },
  containerError: {
    borderWidth: SPACING.borderWidth.medium,
    borderColor: COLORS.alert.yellow
  },
  label: {
    color: COLORS.base.white
  },
  iconContainer: {
    height: 32,
    width: 32,
    borderRadius: SPACING.borderRadius.xLarge,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.base.blueLight
  },
  textInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.padding.medium,
    gap: SPACING.gap.medium,
    borderRadius: SPACING.borderRadius.small,
    backgroundColor: COLORS.base.greyLight,
  },
  textInput: {
    width: '100%',
    paddingVertical: SPACING.padding.medium,
    color: COLORS.text.black
  },
  placeholder: {
    color: COLORS.text.grey
  },
  error: {
    color: COLORS.alert.yellow
  }
})