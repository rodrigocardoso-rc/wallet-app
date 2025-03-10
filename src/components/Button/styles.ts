import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles'

export default StyleSheet.create({
  animatedViewContainer: {
    width: '100%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
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