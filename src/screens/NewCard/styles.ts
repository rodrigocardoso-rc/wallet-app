import { StyleSheet } from 'react-native'
import { SPACING } from '../../styles'

export default StyleSheet.create({
  keyBoardContainer: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    gap: SPACING.gap.xLarge,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.padding.large,
    paddingHorizontal: SPACING.padding.large,
  },
  title: {
    alignSelf: 'center',
    color: 'white',
  },
  mediumInputsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
