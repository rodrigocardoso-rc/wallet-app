import { View } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

import { ICard } from "../../model"
import { BackgroundScreen, TitleAnimated, CardData, Text, Button } from "../../components"
import { RootStackNavigationProp, RootStackParamList } from "../../navigators/AppNavigator"
import { SCREENS_NAME } from "../../screens/ScreensName"

import styles from "./styles"

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