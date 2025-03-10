import { useEffect } from 'react';

import { CardsProvider } from './src/contexts/CardsContext';
import AppNavigator from './src/navigators/AppNavigator';
import * as FlashMessage from './src/modules/FlashMessage/FlashMessage';
import * as Orientation from './src/modules/Orientation/Orientation';

export default function App() {
  useEffect(() => {
    Orientation.lockOrientation()
    FlashMessage.show({ message: 'Bem vindo ao Wallet Test', type: 'success' })
  }, [])

  return (
    <CardsProvider>
      <AppNavigator />
      <FlashMessage.FlashMessageComponent />
    </CardsProvider>
  );
}

