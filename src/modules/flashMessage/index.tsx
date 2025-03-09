import { TextStyle } from "react-native";
import FlashMessage, { showMessage, hideMessage, MessageOptions } from "react-native-flash-message";

import { TYPOGRAPHY } from "../../styles";
import styles from "./styles";

interface IShowMessage {
  message: string,
  type: 'success' | 'info' | 'danger'
}

const DURATION = 3 * 1000

function show({ message, type }: IShowMessage) {
  const options: MessageOptions = {
    message: message,
    style: [styles.container, styles[type]],
    titleStyle: TYPOGRAPHY.h5 as TextStyle,
    duration: DURATION
  }

  return showMessage(options)
}

function hide() {
  return hideMessage()
}

export {
  show,
  hide
};

export default FlashMessage