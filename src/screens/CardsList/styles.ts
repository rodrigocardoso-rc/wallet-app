import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base.blueDark
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
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
    paddingHorizontal: 28,
    gap: 10,
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  bodyText: {
    color: COLORS.base.white
  },
})