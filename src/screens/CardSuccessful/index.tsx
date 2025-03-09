import { View } from "react-native"
import BackgroundScreen from "../../components/BackgroundScreen"
import { ICard } from "../../model/card"
import styles from "./styles"
import TitleAnimated from "../../components/TitleAnimated"
import CardData from "../../components/CardData"
import Text from "../../components/Text"
import Button from "../../components/Button"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackNavigationProp, RootStackParamList } from "../../navigator/appNavigation"
import { SCREENS_NAME } from "../screensName"

export interface ICardSuccessfulScreenParams {
  card: ICard
}

type TRouteParams = RouteProp<RootStackParamList, SCREENS_NAME.cardSuccessful>;

export default function CardSuccessfulScreen() {
  const navigation = useNavigation<RootStackNavigationProp>()
  const { params: { card } } = useRoute<TRouteParams>()

  function onPressNext() {
    navigation.reset({
      index: 0,
      routes: [
        { name: SCREENS_NAME.home },
        { name: SCREENS_NAME.loadingWallet, params: { syncFromApi: true } }]
    })
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