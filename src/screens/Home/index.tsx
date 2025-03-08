import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { SCREENS_NAME } from "../screensName";
import Button from "../../components/Button";
import TitleAnimated from "../../components/TitleAnimated";
import BackgroundAnimated from "../../components/BackgroundScreen";
import { RootStackNavigationProp } from "../../navigator/appNavigation";

import styles from "./styles";

export default function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  function onPressMyCards() {
    navigation.navigate(SCREENS_NAME.loadingWallet)
  }

  function onPressNewCard() {
    navigation.navigate(SCREENS_NAME.newCard)
  }

  return (
    <BackgroundAnimated>
      <StatusBar hidden />

      <View style={styles.container}>
        <TitleAnimated variant="h1" style={{ color: 'white' }}>
          Wallet Test
        </TitleAnimated>

        <View style={styles.buttonContainer}>
          <Button
            text={"Meus cartões"}
            onPress={onPressMyCards} />

          <Button
            variant={"secondary"}
            text={"Cadastrar cartão"}
            onPress={onPressNewCard} />
        </View>
      </View>
    </BackgroundAnimated>
  )
}