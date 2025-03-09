import * as ScreenOrientation from 'expo-screen-orientation';

export function lockOrientation() {
  return ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}