import { TextStyle } from "react-native"
import { showMessage, hideMessage, MessageOptions } from "react-native-flash-message"
import FlashMessage from "../../components/FlashMessage/FlashMessage";

import TYPOGRAPHY from "../../styles/Typography"
import COLORS from "../../styles/Colors";

interface IShowMessage {
  message: string;
  type: 'success' | 'info' | 'danger';
}

const DURATION = 3 * 1000

const BACKGROUND_COLORS = {
  success: COLORS.alert.green,
  info: COLORS.alert.yellow,
  danger: COLORS.alert.red
}

function showFlashMessage({ message, type }: IShowMessage) {
  const options: MessageOptions = {
    message: message,
    backgroundColor: BACKGROUND_COLORS[type],
    titleStyle: TYPOGRAPHY.h5 as TextStyle,
    duration: DURATION
  }

  return showMessage(options)
}

function hideFlashMessage() {
  return hideMessage()
}

export { hideFlashMessage, showFlashMessage }
export default FlashMessage