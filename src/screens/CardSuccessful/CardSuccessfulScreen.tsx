import { View } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

import { Background, TitleAnimated, CardData, Text, Button } from "../../components"
import { RootStackNavigationProp, RootStackParamList } from "../../navigators/AppNavigator"
import { SCREENS_NAME } from "../../screens/ScreensName"

import styles from "./styles"
import { ICardListTyped } from "../../@types"

export interface ICardSuccessfulScreenParams {
  card: ICardListTyped
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
    <Background>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TitleAnimated variant="h1" style={styles.text}>
            Wallet Test
          </TitleAnimated>

          <Text variant="h4" color={styles.text.color} >
            Cartão cadastrado com sucesso
          </Text>
        </View>

        <CardData card={card} />

        <Button
          text={"Avançar"}
          variant={"default"}
          onPress={onPressNext} />
      </View>
    </Background>
  )

}