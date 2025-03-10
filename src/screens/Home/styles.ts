import { StyleSheet } from 'react-native'
import { SPACING } from '../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.padding.xLarge,
    gap: SPACING.gap.large,
  },
  buttonContainer: {
    width: '100%',
    gap: SPACING.gap.xLarge,
    paddingVertical: SPACING.padding.large,
  }
})