import { Platform } from "react-native"
import COLORS from "./Colors"

const iosShadow = {
  shadowColor: COLORS.text.black,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
}

const androidShadow = {
  elevation: 5,
}

const SHADOW = Platform.OS === 'ios'
  ? iosShadow
  : androidShadow

export default SHADOW
