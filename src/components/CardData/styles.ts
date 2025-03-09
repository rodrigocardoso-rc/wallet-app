import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles'
import { CARD_HEIGHT, OVERLAP } from '.'

export default StyleSheet.create({
  cardWrapper: {
    width: '100%',
    height: CARD_HEIGHT
  },
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
    gap: 38,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 38,
    marginTop: -(CARD_HEIGHT - OVERLAP),
  },
  containerText: {
    gap: 4,
  },
  unfocused: {
    opacity: 0.4
  }
})