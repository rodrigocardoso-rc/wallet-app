import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SCREENS_NAME } from "../ScreensName";
import Button from "../../components/Button/Button";
import Background from "../../components/Background/Background";
import TitleAnimated from "../../components/TitleAnimated/TitleAnimated";
import { RootStackNavigationProp } from "../../navigators/AppNavigator";

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
    <Background>
      <View style={styles.container}>
        <TitleAnimated variant="h1" style={{ color: 'white' }}>
          Wallet Test
        </TitleAnimated>

        <View style={styles.buttonContainer}>
          <Button
            text={"Meus cartões"}
            onPress={onPressMyCards} />

          <Button
            isAnimated
            variant={"secondary"}
            text={"Cadastrar cartão"}
            onPress={onPressNewCard} />
        </View>
      </View>
    </Background>
  )
}