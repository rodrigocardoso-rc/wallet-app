import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  keyBoardContainer: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
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
