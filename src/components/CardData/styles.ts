import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles'

export default StyleSheet.create({
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
    maxWidth: 360,
    gap: 38,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 38,
  },
  containerText: {
    gap: 4,
  }
})