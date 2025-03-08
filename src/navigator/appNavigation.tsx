import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import OutlinedHeader from "../components/OutlinedHeader";
import NewCardScreen from "../screens/NewCard";
import { SCREENS_NAME } from "../screens/screensName";
import CardSuccessfulScreen, { ICardSuccessfulScreenParams } from "../screens/CardSuccessful";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  [SCREENS_NAME.home]: undefined;
  [SCREENS_NAME.newCard]: undefined;
  [SCREENS_NAME.cardSuccessful]: ICardSuccessfulScreenParams
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS_NAME.home}
          options={{ headerShown: false }}
          component={HomeScreen} />

        <Stack.Screen
          name={SCREENS_NAME.newCard}
          options={{
            headerTransparent: true,
            header: (props) => <OutlinedHeader title='Cadastro' {...props} />
          }}
          component={NewCardScreen} />

        <Stack.Screen
          name={SCREENS_NAME.cardSuccessful}
          options={{
            headerTransparent: true,
            header: (props) => <OutlinedHeader title='Cadastro' {...props} />
          }}
          component={CardSuccessfulScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}