import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import OutlinedHeader from "../components/OutlinedHeader";
import NewCardScreen from "../screens/NewCard";
import { SCREENS_NAME } from "../screens/screensName";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  [SCREENS_NAME.home]: undefined;
  [SCREENS_NAME.newCard]: undefined;
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
            header: () => <OutlinedHeader title='Cadastro' />
          }}
          component={NewCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}