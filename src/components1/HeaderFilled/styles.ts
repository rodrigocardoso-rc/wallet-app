import { StyleSheet } from 'react-native'
import { COLORS, SHADOW } from '../../styles1'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    backgroundColor: COLORS.base.greyLight,
    ...SHADOW
  },
  iconContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    height: 22,
    width: 22,
  },
  title: {
    color: COLORS.base.blueDark,
  },
})