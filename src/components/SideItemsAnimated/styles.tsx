import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../styles'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    position: 'absolute',
    height: width,
    width: width,
    borderRadius: width / 8,
    backgroundColor: COLORS.base.greyLight,
    opacity: 0.2,
    transform: [{ rotate: '-45deg' }],
  },
  topSide: {
    top: -(width / 2.5),
    left: -(width / 2),
  },
  bottomSide: {
    bottom: -(width / 2.5),
    right: -(width / 2),
  }
})