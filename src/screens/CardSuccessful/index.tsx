import { View } from "react-native"
import BackgroundScreen from "../../components/BackgroundScreen"
import { ICard } from "../../model/card"
import styles from "./styles"
import TitleAnimated from "../../components/TitleAnimated"
import CardData from "../../components/CardData"
import Text from "../../components/Text"
import Button from "../../components/Button"
import { useNavigation } from "@react-navigation/native"
import { RootStackNavigationProp } from "../../navigator/appNavigation"
import { SCREENS_NAME } from "../screensName"

export interface ICardSuccessfulScreenParams {
  card: ICard
}


export default function CardSuccessfulScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const card: ICard = {
    id: '',
    number: "1234123412341234",
    cvv: "123",
    name: "Rodrigo Teste",
    expirationDate: "0430"
  }

  function onPressNext() {
    navigation.navigate(SCREENS_NAME.home)
  }

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TitleAnimated variant="h1" style={styles.text}>
            Wallet Test
          </TitleAnimated>

          <Text variant="h4" color={styles.text.color} >
            Cartão cadastrado com sucesso
          </Text>
        </View>

        <CardData card={card} type="black" />

        <Button
          text={"Avançar"}
          variant={"default"}
          onPress={onPressNext} />
      </View>
    </BackgroundScreen>
  )

}