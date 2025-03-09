import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { SCREENS_NAME } from "../";
import { Button, TitleAnimated, BackgroundScreen } from "../../components";
import { RootStackNavigationProp } from "../../navigators/AppNavigator";

import styles from "./styles";

export const NAME_HOME_SCREEN = 'HomeScreen'

export default function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  function onPressMyCards() {
    navigation.navigate(SCREENS_NAME.loadingWallet)
  }

  function onPressNewCard() {
    navigation.navigate(SCREENS_NAME.newCard)
  }

  return (
    <BackgroundScreen>
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
    </BackgroundScreen>
  )
}