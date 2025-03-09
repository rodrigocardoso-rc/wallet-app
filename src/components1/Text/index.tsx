import { ColorValue, StyleProp, TextProps, Text as TextRN, TextStyle } from 'react-native';

import { COLORS, TVariantText, TYPOGRAPHY } from '../../styles1';

interface ITextProps extends TextProps {
  children: string | string[];
  variant: TVariantText
  color?: ColorValue
  style?: StyleProp<TextStyle>;
}

export default function Text({
  children,
  variant,
  color = COLORS.text.black,
  style,
  ...rest
}: ITextProps) {

  return (
    <TextRN {...rest} style={[TYPOGRAPHY[variant] as TextStyle, style, { color }]}>
      {children}
    </TextRN>
  );
}
