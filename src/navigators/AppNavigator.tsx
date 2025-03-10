import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"

import { SCREENS_NAME } from "../screens/ScreensName"
import HomeScreen from "../screens/Home/HomeScreen"
import NewCardScreen from "../screens/NewCard/NewCardScreen"
import CardsListScreen from "../screens/CardsList/CardsListScreen"
import LoadingWalletScreen from "../screens/LoadingWallet/LoadingWalletScreen"
import CardSuccessfulScreen from "../screens/CardSuccessful/CardSuccessfulScreen"
import HeaderOutlined from "../components/HeaderOutlined/HeaderOutlined"
import HeaderFilled from "../components/HeaderFilled/HeaderFilled"

import { ICardSuccessfulScreenParams } from "../screens/CardSuccessful/CardSuccessfulScreen"
import { ILoadingWalletScreenParams } from "../screens/LoadingWallet/LoadingWalletScreen"

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
  [SCREENS_NAME.home]: undefined
  [SCREENS_NAME.newCard]: undefined
  [SCREENS_NAME.cardSuccessful]: ICardSuccessfulScreenParams,
  [SCREENS_NAME.loadingWallet]?: ILoadingWalletScreenParams,
  [SCREENS_NAME.cardsList]: undefined
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>

export default function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS_NAME.home}
          options={{ animation: 'fade', headerShown: false }}
          component={HomeScreen} />

        <Stack.Screen
          name={SCREENS_NAME.newCard}
          options={{
            animation: 'fade',
            headerTransparent: true,
            header: (props) => <HeaderOutlined title='Cadastro' {...props} />
          }}
          component={NewCardScreen} />

        <Stack.Screen
          name={SCREENS_NAME.cardSuccessful}
          options={{
            animation: 'fade',
            headerTransparent: true,
            header: (props) => <HeaderOutlined title='Cadastro' {...props} />
          }}
          component={CardSuccessfulScreen} />

        <Stack.Screen
          name={SCREENS_NAME.loadingWallet}
          options={{ animation: 'fade', headerShown: false }}
          component={LoadingWalletScreen} />

        <Stack.Screen
          name={SCREENS_NAME.cardsList}
          options={{
            animation: 'fade',
            header: (props) => <HeaderFilled title='Wallet Test' {...props} />
          }}
          component={CardsListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}