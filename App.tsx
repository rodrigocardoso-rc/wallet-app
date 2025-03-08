import { Text, View, Image } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera } from "./src/assets/icons"
import BackgroundAnimated from './src/components/BackgroundScreen';
import HomeScreen from './src/screens/Home';
import NewCardScreen from './src/screens/NewCard';
import OutlinedHeader from './src/components/OulinedHeader';
import { CardsContext, CardsProvider } from './src/context/CardsContext';

const Stack = createNativeStackNavigator();
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function Navigation() {
  return (
    <CardsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            options={{ headerShown: false }}
            component={HomeScreen} />

          <Stack.Screen
            name="NewCardScreen"
            options={{
              headerTransparent: true,
              header: () => <OutlinedHeader title='Cadastro' />
            }}
            component={NewCardScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CardsProvider>
  );
}

export default function App() {
  return <Navigation />;
}

