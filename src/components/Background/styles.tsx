import { StyleSheet } from 'react-native'
import COLORS from '../../styles/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.blueDark,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})