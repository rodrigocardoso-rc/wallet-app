import { forwardRef, ReactElement, Ref } from "react";
import {
  TextInput, TextInputProps,
  TextStyle, TouchableOpacity, View
} from "react-native";

import { Text } from "../";
import { TYPOGRAPHY } from "../../styles";
import styles from "./styles";

interface IIconTextInput {
  Component: ReactElement;
  onPress: () => void;
}

interface IInputProps extends TextInputProps {
  label: string;
  icon?: IIconTextInput;
  size?: 'large' | 'medium';
  mask?: string;
  error?: string;

  onChangeText: (newValue: string) => void;
}

function InputComponent({
  label,
  icon,
  size = 'large',
  onChangeText,
  mask,
  error,
  ...rest
}: IInputProps, ref: Ref<TextInput>) {

  return (
    <View style={[styles.container, styles[size]]}>
      <Text variant={"small"} color={styles.label.color}>{label}</Text>

      <View style={[styles.textInputContainer, error && styles.containerError]}>
        {icon && (
          <TouchableOpacity onPress={icon.onPress} style={styles.iconContainer}>
            {icon.Component}
          </TouchableOpacity>
        )}

        <TextInput
          {...rest}
          ref={ref}
          placeholderTextColor={styles.placeholder.color}
          style={[styles.textInput, TYPOGRAPHY.paragraph as TextStyle]}
          onChangeText={onChangeText} />
      </View>

      {error &&
        <Text variant={"small"} color={styles.error.color}>{error}</Text>}
    </View>
  );
}

const Input = forwardRef(InputComponent);
export default Input;