import { useEffect } from 'react';

import FlashMessage, { showFlashMessage } from './src/modules/FlashMessage/FlashMessage';
import { CardsProvider } from './src/contexts/CardsContext';
import AppNavigator from './src/navigators/AppNavigator';
import * as Orientation from './src/modules/Orientation/Orientation';
import { StatusBar, View } from 'react-native';
import COLORS from './src/styles/Colors';

export default function App() {
  useEffect(() => {
    Orientation.lockOrientation()
    showFlashMessage({ message: 'Bem vindo ao Wallet Test', type: 'success' })
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.base.blueDark }}>
      <CardsProvider>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={"transparent"} />

        <AppNavigator />

        <FlashMessage />
      </CardsProvider>
    </View>
  );
}

