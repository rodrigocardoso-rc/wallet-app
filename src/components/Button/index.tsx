import { ActivityIndicator, TouchableOpacity } from "react-native";
import Text from "../Text";
import styles from "./styles";

interface IButtonProps {
  text: string;
  variant?: 'default' | 'disable' | 'secondary';
  isLoading?: boolean;

  onPress: () => void;
}

export default function Button({
  text,
  variant = 'default',
  isLoading,
  onPress
}: IButtonProps) {

  return (
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
  );
}
