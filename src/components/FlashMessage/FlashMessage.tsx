import FlashMessageComponent from "react-native-flash-message"
import styles from "./styles"
import { StatusBar } from "react-native"


export default function FlashMessage() {
  return (
    <FlashMessageComponent
      position="top"
      style={[styles.container, { paddingTop: StatusBar.currentHeight }]}
    />
  )
}