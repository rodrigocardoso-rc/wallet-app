import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles1'

export default StyleSheet.create({
  large: {
    width: '100%'
  },
  medium: {
    width: '45%'
  },
  container: {
    gap: 4,
    alignItems: 'flex-start',
  },
  containerError: {
    borderWidth: 2,
    borderColor: COLORS.alert.yellow
  },
  label: {
    color: COLORS.base.white
  },
  iconContainer: {
    height: 32,
    width: 32,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.base.blueLight
  },
  textInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 8,
    backgroundColor: COLORS.base.greyLight,
  },
  textInput: {
    width: '100%',
    paddingVertical: 16,
    color: COLORS.text.black
  },
  placeholder: {
    color: COLORS.text.grey
  },
  error: {
    color: COLORS.alert.yellow
  }
})