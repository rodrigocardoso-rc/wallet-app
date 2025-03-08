import { ActivityIndicator, TouchableOpacity } from "react-native";
import Text from "../Text";
import styles from "./styles";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";

interface IButtonProps {
  text: string;
  variant?: 'default' | 'disable' | 'secondary';
  isAnimated?: boolean;
  isLoading?: boolean;

  onPress: () => void;
}

export default function Button({
  text,
  variant = 'default',
  isAnimated,
  isLoading,
  onPress
}: IButtonProps) {
  const buttonPosition = useSharedValue(50)

  useEffect(() => {
    if (!isAnimated)
      return

    buttonPosition.value = withTiming(0, {
      duration: 500,
      easing: Easing.bounce
    })
  }, [isAnimated])

  const buttonStyle = useAnimatedStyle(() => {
    return {
      width: '100%',
      transform: [{ translateY: isAnimated ? buttonPosition.value : 0 }]
    }
  })

  return (
    <Animated.View style={buttonStyle}>
      <TouchableOpacity
        disabled={variant === 'disable' || isLoading}
        style={[styles.container, styles[variant]]}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator size="small" color={styles[variant].color} />
        ) : (
          <Text variant="h5" color={styles[variant].color}>{text}</Text>
        )}

      </TouchableOpacity>
    </Animated.View>
  );
}
