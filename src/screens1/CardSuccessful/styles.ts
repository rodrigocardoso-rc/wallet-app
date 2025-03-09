import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles1'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
    gap: 10,
  },
  textContainer: {
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: COLORS.base.white
  }
})