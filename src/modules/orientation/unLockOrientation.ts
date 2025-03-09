import * as ScreenOrientation from 'expo-screen-orientation';

export function unLockOrientation() {
  return ScreenOrientation.unlockAsync();
}