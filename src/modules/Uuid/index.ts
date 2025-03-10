import uuid from 'react-native-uuid'

export function generateUUid() {
  return uuid.v4()
}