import * as ScreenOrientation from 'expo-screen-orientation'

function lockOrientation() {
  return ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
}

function unLockOrientation() {
  return ScreenOrientation.unlockAsync()
}

export { lockOrientation, unLockOrientation }