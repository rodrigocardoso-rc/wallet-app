import { useEffect } from 'react';

import { CardsProvider } from './src/contexts1';
import { AppNavigator } from './src/navigators1';
import { FlashMessage, Orientation } from './src/modules1';

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

