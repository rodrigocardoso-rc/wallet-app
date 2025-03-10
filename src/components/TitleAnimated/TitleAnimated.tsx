import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import TYPOGRAPHY, { TVariantText } from '../../styles/Typography';
import useTitleAnimation from '../../hooks/useTitleAnimation';

interface ITextProps {
  variant: TVariantText;
  fromBottom?: boolean
  style?: StyleProp<TextStyle>

  children: string;
}

export default function TitleAnimated({ variant, fromBottom, style, children }: ITextProps) {
  const textPosition = useTitleAnimation(fromBottom)

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: textPosition.value }]
    }
  })

  return (
    <Animated.Text
      style={[TYPOGRAPHY[variant] as TextStyle, titleStyle, style]}>
      {children}
    </Animated.Text>
  );
}
