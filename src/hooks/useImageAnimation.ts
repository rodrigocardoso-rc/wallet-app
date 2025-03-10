import { useEffect } from 'react';
import { Easing, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';

export function useImageAnimation(canAnimate: boolean, onAnimationEnd: () => void) {
  const imageScale = useSharedValue(1);

  useEffect(() => {
    if (canAnimate) {
      imageScale.value = withTiming(
        2,
        { duration: 800, easing: Easing.ease },
        () => runOnJS(onAnimationEnd)()
      );
    }
  }, [canAnimate]);


  return imageScale;
};
