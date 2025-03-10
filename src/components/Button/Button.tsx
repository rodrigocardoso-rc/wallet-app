import { ActivityIndicator, TouchableOpacity } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import Text from "../Text/Text";
import { useButtonAnimation } from "../../hooks";

import styles from "./styles";

interface IButtonProps {
  text: string;
  variant?: 'default' | 'disable' | 'secondary';
  disabled?: boolean;
  isAnimated?: boolean;
  isLoading?: boolean;

  onPress: () => void;
}

export default function Button({
  text,
  variant = 'default',
  disabled,
  isAnimated,
  isLoading,
  onPress
}: IButtonProps) {
  const buttonPosition = useButtonAnimation()

  const buttonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: isAnimated ? buttonPosition.value : 0 }]
    }
  })

  return (
    <Animated.View style={[buttonStyle, styles.animatedViewContainer]}>
      <TouchableOpacity
        disabled={disabled || isLoading}
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
